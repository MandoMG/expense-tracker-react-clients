import React, { useMemo, useRef, useState } from 'react';
import { Modal, SafeAreaView, Switch, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Colors from '../../../common/Colors';
import commonStyles from '../../../common/CommonStyles';
import ModalHeaderComponent from '../../../components/headers/ModalHeader';
import { RecordModalStyles } from '../styles/RecordModalStyles';

interface AddEditRecordModalProps {
  handleClose: () => void;
  handleSave: () => void;
}

enum FieldTypes {
  description = 'Description',
  category = 'Category',
  amount = 'amount',
}

const AddEditRecordModal = ({ handleClose, handleSave }: AddEditRecordModalProps) => {
  const [isIncome, setIsIncome] = useState<boolean>(false);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const descriptionRef = useRef<string>('');
  const categoryRef = useRef<string>('');
  const amountRef = useRef<string>('');

  const handleIncomeSwitchChange = (value: boolean) => {
    setIsIncome(value);
  };

  const updateTextFieldRefValue = (value: string, fieldType: FieldTypes) => {
    switch (fieldType) {
      case FieldTypes.description:
        if (value !== descriptionRef.current) { descriptionRef.current = value }
        return;
      case FieldTypes.category:
        if (value !== categoryRef.current) { categoryRef.current = value }
        return;
      case FieldTypes.amount:
        if (value !== amountRef.current) { amountRef.current = value }
        return;
      default:
        return;
    }
  }

  const onSave = () => {
    const refs = {
      description: descriptionRef.current,
      category: categoryRef.current,
      amount: amountRef.current,
    }
    console.log('Refs: ', refs);
    handleSave();
  }

  const selectedDate = useMemo(() => {
    if (!date) {
      return '';
    }

    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
  }, [date])

  return (
    <Modal animationType='slide'>
      <SafeAreaView>
        <ModalHeaderComponent title="Add Record" handleClose={handleClose} handleSave={onSave} />
        <View style={RecordModalStyles.sliderWrapper}>
          <View style={commonStyles.flexOne}>
            <Text style={RecordModalStyles.sliderText}>Is Income</Text>
          </View>
          <View style={RecordModalStyles.sliderItemWrapper}>
            <Switch
              style={RecordModalStyles.sliderItem}
              trackColor={{ false: Colors.backgroundGray, true: Colors.expenseOrange }}
              onValueChange={handleIncomeSwitchChange}
              value={isIncome} />
          </View>
        </View>
        <View>
          <Text style={RecordModalStyles.inputTitle}>Description</Text>
          <View style={RecordModalStyles.inputFieldWrapper}>
            <TextInput style={RecordModalStyles.inputField} defaultValue={''} onEndEditing={(event) => updateTextFieldRefValue(event.nativeEvent.text, FieldTypes.description)} />
          </View>
        </View>
        <View>
          <Text style={RecordModalStyles.inputTitle}>Category</Text>
          <View style={RecordModalStyles.inputFieldWrapper}>
            <TextInput style={RecordModalStyles.inputField} defaultValue={''} onEndEditing={(event) => updateTextFieldRefValue(event.nativeEvent.text, FieldTypes.category)} />
          </View>
        </View>
        <View>
          <Text style={RecordModalStyles.inputTitle}>Date</Text>
          <View style={RecordModalStyles.inputFieldWrapper} >
            <TextInput onPressIn={() => setOpen(true)} editable={false} style={RecordModalStyles.inputField} defaultValue={selectedDate} />
          </View>
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
        </View>
        <View>
          <Text style={RecordModalStyles.inputTitle}>Amount</Text>
          <View style={RecordModalStyles.inputFieldWrapper}>
            <TextInput
              onEndEditing={(event) => updateTextFieldRefValue(event.nativeEvent.text, FieldTypes.amount)}
              keyboardType='decimal-pad'
              style={RecordModalStyles.inputField}
              defaultValue={''} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default AddEditRecordModal;