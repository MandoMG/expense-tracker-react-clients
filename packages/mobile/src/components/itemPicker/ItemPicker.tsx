import React, { useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RecordModalStyles } from '../../screens/Records/styles/RecordModalStyles';

interface ItemPickerProps {
  itemList: string[];
  selectedItem: string;
  setOpenPicker: (value: boolean) => void;
  setSelectedItem: (item: string) => void;
};

const ItemPicker = (props: ItemPickerProps) => {
  const { itemList, selectedItem, setOpenPicker, setSelectedItem } = props;
  const pickerRef = useRef();

  const open = () => {
    if (pickerRef.current) {
      pickerRef.current.focus();
    }
  }

  const close = () => {
    if (pickerRef.current) {
      pickerRef.current.blur();
    }
  }

  useEffect(() => {
    close();
  });

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
      <Text style={RecordModalStyles.pickerButtonText}>Close</Text>
      {/* <TouchableOpacity onPress={() => setOpenPicker(false)}>
        <Text style={RecordModalStyles.pickerButtonText}>Close</Text>
      </TouchableOpacity> */}
    </View>
  )

};

export default ItemPicker;