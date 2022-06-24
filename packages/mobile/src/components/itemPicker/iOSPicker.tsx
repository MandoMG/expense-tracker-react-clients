import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RecordModalStyles } from '../../screens/Records/styles/RecordModalStyles';
import { ItemPickerProps } from './ItemPicker';

const IOSPicker = (props: ItemPickerProps) => {
  const { itemList, selectedItem, setSelectedItem, setOpenPicker } = props;
  return (
    <View>
      <Picker
        selectedValue={selectedItem}
        mode="dialog"
        onValueChange={(itemValue) => setSelectedItem(itemValue)}
      >
        {!!itemList && itemList.map((item: string) => (
          <Picker.Item label={item} value={item} />
        ))}
      </Picker>
      <TouchableOpacity onPress={() => setOpenPicker(false)}>
        <Text style={RecordModalStyles.pickerButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  )
};

export default IOSPicker;