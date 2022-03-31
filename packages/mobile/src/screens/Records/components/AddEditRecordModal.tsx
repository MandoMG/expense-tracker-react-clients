import React, { useState } from 'react';
import { Modal, SafeAreaView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Colors from '../../../common/Colors';
import commonStyles from '../../../common/CommonStyles';
import ModalHeaderComponent from '../../../components/headers/ModalHeader';
import { RecordModalStyles } from '../styles/RecordModalStyles';

interface AddEditRecordModalProps {
  handleClose: () => void;
  handleSave: () => void;
}

const AddEditRecordModal = ({ handleClose, handleSave }: AddEditRecordModalProps) => {
  const [isIncome, setIsIncome] = useState<boolean>(false);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


  const handleIncomeSwitchChange = (value: boolean) => {
    setIsIncome(value);
  };

  return (
    <Modal animationType='slide'>
      <SafeAreaView>
        <ModalHeaderComponent title="Add Record" handleClose={handleClose} handleSave={handleSave} />
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
            <TextInput style={RecordModalStyles.inputField} defaultValue={''} />
          </View>
        </View>
        <View>
          <Text style={RecordModalStyles.inputTitle}>Category</Text>
          <View style={RecordModalStyles.inputFieldWrapper}>
            <TextInput style={RecordModalStyles.inputField} defaultValue={''} />
          </View>
        </View>
        <View>
          <Text style={RecordModalStyles.inputTitle}>Date</Text>
          <TouchableOpacity style={RecordModalStyles.inputFieldWrapper} onPress={() => setOpen(true)}>
            <View style={RecordModalStyles.dateField} />
          </TouchableOpacity>
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