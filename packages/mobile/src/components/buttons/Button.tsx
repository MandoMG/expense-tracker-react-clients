import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonComponentProps {
   buttonText: string;
   isPrimary?: boolean;
   onPress?: () => void;
}

// TODO: AM - Move component to common package once React can use common components.
const ButtonComponent = (props: ButtonComponentProps) => {
   const { buttonText, isPrimary, onPress } = props;

   return (
      <TouchableOpacity style={isPrimary ? styles.primaryButton : styles.secondaryButton} onPress={onPress}>
         <Text style={isPrimary ? styles.primaryText : styles.secondaryText}>{buttonText}</Text>
      </TouchableOpacity>
   );

}

const styles = StyleSheet.create({
   primaryButton: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 25,
      paddingVertical: 10,
      margin: 5
   },
   primaryText: {
      color: '#4b6ee1'
   },
   secondaryButton: {
      flex: 1,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#FFFFFF',
      borderRadius: 25,
      paddingVertical: 10,
      margin: 5
   },
   secondaryText: {
      color: '#FFFFFF'
   }
});

export default ButtonComponent;