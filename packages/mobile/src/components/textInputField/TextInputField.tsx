import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { TextInputStyles } from './styles/TextInputStyles';

const TextInputField = (props: TextInputProps) => {
  const { onPressIn, editable, defaultValue, keyboardType } = props;

  const isEditable = editable === undefined ? true : editable;

  return (
    <TextInput
      onPressIn={onPressIn}
      editable={isEditable}
      keyboardType={keyboardType}
      style={TextInputStyles.inputField}
      defaultValue={defaultValue} />
  )
};

export default TextInputField;