import { Picker } from '@react-native-picker/picker';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React, { useMemo, useState } from 'react';
import { Button, Modal, SafeAreaView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Colors from '../../../common/Colors';
import commonStyles from '../../../common/CommonStyles';
import ModalHeaderComponent from '../../../components/headers/ModalHeader';
import { Record } from '../../../types';
import useRecords from '../hooks/useRecords';
import { RecordModalStyles } from '../styles/RecordModalStyles';

interface AddEditRecordModalProps {
  record?: Record;
  handleClose: () => void;
  handleSave: (record: Record, recordId?: number) => void;
}

// TODO TASKS:
// On modal mount, category item should be set to the first item of the retrieved categories
// On isIncome change, category item should be set to the first item of the appropriate categories
// Make fields populate on record modal mount
// Add mask to amount

const AddEditRecordModal = ({ record, handleClose, handleSave }: AddEditRecordModalProps) => {
  const [isIncome, setIsIncome] = useState<boolean>(record?.isIncome || false);
  const [description, setDescription] = useState<string>(record?.description || '');
  const [amount, setAmount] = useState<string>(String(record?.amount || ''));

  const { categories, handleRecordDateConversion } = useRecords({ isRecordIncome: isIncome });
  const [date, setDate] = useState<Date>(handleRecordDateConversion(record?.recordDate));
  const [open, setOpen] = useState(false)
  const [openPicker, setOpenPicker] = useState(false)

  const setInitialSelectedCategory = () => {
    if (record && record.category) {
      return record.category;
    };

    return categories ? categories[0] : '';
  }
  const [selectedItem, setSelectedItem] = useState(setInitialSelectedCategory());

  const handleIncomeSwitchChange = (value: boolean) => {
    setIsIncome(value);
  };

  const onSave = () => {
    const newRecord: Record = {
      description,
      category: selectedItem,
      recordDate: `${date.getFullYear()}-${TextUtil.padNumber(date.getMonth() + 1)}-${TextUtil.padNumber(date.getDate())}`,
      amount: Number(amount),
      isIncome,
    };

    handleSave(newRecord, record?._id);
  }

  const onCategoryFieldPress = () => {
    setOpenPicker(!openPicker);
    if (!selectedItem && categories) {
      setSelectedItem(categories[0]);
    }
  };

  const selectedDate = useMemo(() => {
    if (!date) {
      return '';
    }

    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }, [date])

  const handleDateSave = (date: Date) => {
    setOpen(false);
    setDate(date);
  }

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
            <TextInput
              style={RecordModalStyles.inputField}
              defaultValue={description}
              onChangeText={(text) => setDescription(text)} />
          </View>
        </View>
        <View>
          <Text style={RecordModalStyles.inputTitle}>Category</Text>
          <View style={RecordModalStyles.inputFieldWrapper}>
            <TouchableOpacity onPress={onCategoryFieldPress}>
              <Text style={RecordModalStyles.inputField}>{selectedItem}</Text>
            </TouchableOpacity>
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
            onConfirm={handleDateSave}
            onCancel={() => {
              setOpen(false)
            }}
          />
        </View>
        <View>
          <Text style={RecordModalStyles.inputTitle}>Amount</Text>
          <View style={RecordModalStyles.inputFieldWrapper}>
            <TextInput
              onChangeText={(text) => setAmount(text)}
              keyboardType='decimal-pad'
              style={RecordModalStyles.inputField}
              defaultValue={amount} />
          </View>
        </View>
        {openPicker && (
          <View>
            <Picker
              selectedValue={selectedItem}
              onValueChange={(itemValue) => setSelectedItem(itemValue)}
            >
              {!!categories && categories.map((category: string) => (
                <Picker.Item label={category} value={category} />
              ))}
            </Picker>
            <TouchableOpacity onPress={() => setOpenPicker(false)}>
              <Text style={RecordModalStyles.pickerButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  )
}

export default AddEditRecordModal;