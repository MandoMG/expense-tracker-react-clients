import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ModalHeaderStyles } from './styles/HeaderStyles';

interface ModalHeaderProps {
  handleClose?: () => void;
  title: string;
  handleSave?: () => void;
}

const ModalHeaderComponent = (props: ModalHeaderProps) => {
  const { handleClose, title, handleSave } = props;
  return (
    <View style={ModalHeaderStyles.headerWrapper}>
      <View style={ModalHeaderStyles.leftItemWrapper}>
        {!!handleClose && (
          <TouchableOpacity onPress={handleClose}>
            <Text style={ModalHeaderStyles.sideItems}> Close </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={ModalHeaderStyles.centerItemWrapper}>
        <Text style={ModalHeaderStyles.centerItem}> {title} </Text>
      </View>
      <View style={ModalHeaderStyles.rightItemWrapper}>
        {!!handleSave && (
          <TouchableOpacity onPress={handleSave}>
            <Text style={ModalHeaderStyles.sideItems}> Save </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
};

export default ModalHeaderComponent;