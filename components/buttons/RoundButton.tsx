import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface RoundButtonProps extends TouchableOpacityProps {
  title?: string;
  stylesButton?: object;
}

const RoundButton = ({ onPress, title, stylesButton, ...rest } : RoundButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, stylesButton]} onPress={onPress} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RoundButton;