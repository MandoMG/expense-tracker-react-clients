import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ModalHeaderProps {
  handleClose: () => void;
  title: string;
  handleSave?: () => void;
}

const ModalHeaderComponent = (props: ModalHeaderProps) => {
  const { handleClose, title, handleSave } = props;
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{
        flex: 1,
        paddingLeft: 10,
        paddingTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        <TouchableOpacity onPress={handleClose}>
          <Text style={{ color: 'black', fontSize: 16, flexWrap: 'wrap' }}> Close </Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{ color: 'black', fontSize: 18, flexWrap: 'wrap', fontWeight: 'bold' }}> {title} </Text>
      </View>
      <View style={{
        flex: 1,
        paddingTop: 20,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        {!!handleSave && (
          <TouchableOpacity onPress={handleSave}>
            <Text style={{ color: 'black', fontSize: 16, flexWrap: 'wrap' }}> Save </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
};

export default ModalHeaderComponent;