import React from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../common/Colors';
import commonStyles from '../../common/CommonStyles';
import ModalHeaderComponent from '../headers/ModalHeader';
import {ItemPickerProps} from './ItemPicker';

const AndroidPicker = (props: ItemPickerProps) => {
  const {itemList, setSelectedItem, setOpenPicker} = props;

  const onPickerItemPress = (item: string) => {
    setSelectedItem(item);
    setOpenPicker(false);
  };

  const PickerItem = ({pickerItem}: any) => {
    return (
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          paddingLeft: 20,
          borderBottomWidth: 1,
          borderBottomColor: Colors.lightGray,
        }}
        onPress={() => onPickerItemPress(pickerItem)}>
        <Text style={commonStyles.listItemMainText}>{pickerItem}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType="slide">
      <SafeAreaView>
        <ModalHeaderComponent title="Choose Category" />
        <FlatList
          data={itemList}
          renderItem={({item}) => <PickerItem pickerItem={item} />}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default AndroidPicker;
