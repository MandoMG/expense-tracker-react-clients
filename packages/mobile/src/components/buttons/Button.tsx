import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ButtonComponentProps {
  buttonText: string;
  icon?: string;
  isPrimary?: boolean;
  onPress?: () => void;
}

// TODO: AM - Move component to common package once React can use common components.
const ButtonComponent = (props: ButtonComponentProps) => {
  const {buttonText, icon, isPrimary, onPress} = props;

  return (
    <TouchableOpacity
      style={isPrimary ? styles.primaryButton : styles.secondaryButton}
      onPress={onPress}>
      {!!icon && (
        <View style={{backgroundColor: '#FFFFFF', padding: 10}}>
          <Icon name={icon} size={20} style={{color: '#000000'}} />
        </View>
      )}
      <Text style={isPrimary ? styles.primaryText : styles.secondaryText}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    margin: 5,
    minHeight: 40,
  },
  primaryText: {
    color: '#4b6ee1',
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 10,
    margin: 5,
  },
  secondaryText: {
    color: '#FFFFFF',
  },
});

export default ButtonComponent;
