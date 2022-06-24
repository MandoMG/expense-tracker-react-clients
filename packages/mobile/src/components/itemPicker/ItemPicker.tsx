import React from 'react';
import { Platform } from 'react-native';
import AndroidPicker from './AndroidPicker';
import IOSPicker from './iOSPicker';

export interface ItemPickerProps {
  itemList: string[];
  selectedItem: string;
  setOpenPicker: (value: boolean) => void;
  onModalSave?: () => void;
  setSelectedItem: (item: string) => void;
};

const ItemPicker = (props: ItemPickerProps) => {
  const { itemList, selectedItem, setOpenPicker, setSelectedItem } = props;

  return (
    Platform.OS === 'ios' ? (
      <IOSPicker
        itemList={itemList}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setOpenPicker={setOpenPicker}
      />
    ) : (
      <AndroidPicker
        itemList={itemList}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setOpenPicker={setOpenPicker}
      />))
};

export default ItemPicker;