import React from 'react';
import { Pressable, StyleSheet } from "react-native";

interface CrossTipButtonProps {
    onPress: () => void,
    style: object,
  }

const CrossTipButton = ({ onPress, style }: CrossTipButtonProps ) => {
  return (
    <Pressable
      onPress={onPress} 
      style={[styles.button, style]}>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
})

export default CrossTipButton;