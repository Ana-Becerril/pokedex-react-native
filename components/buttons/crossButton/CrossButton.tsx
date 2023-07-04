import React from 'react';
import CrossTipButton from './CrossTipButton';
import { View, StyleSheet } from 'react-native';

interface CrossButtonProps {
  onPressTop: () => void;
  onPressBottom: () => void;
  onPressLeft: () => void;
  onPressRight: () => void;
}

const CrossButton: React.FC<CrossButtonProps> = ({
  onPressTop,
  onPressBottom,
  onPressLeft,
  onPressRight
}) => {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CrossTipButton 
            onPress={onPressTop}  
            style={styles.top}
            />
      </View>
      <View style={styles.row}>
        <CrossTipButton 
            onPress={onPressLeft}
            style={styles.left} />
        <View style={styles.center}></View>
        <CrossTipButton 
            onPress={onPressRight} 
            style={styles.right}/>
      </View>
      <View style={styles.row}>
        <CrossTipButton 
            onPress={onPressBottom} 
            style={styles.bottom}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    width: 51,
    height: 51,
    backgroundColor: 'black',
  },
  top: {
    borderTopRightRadius:8,
    borderTopLeftRadius:8
  },
  bottom: {
    borderBottomRightRadius:8,
    borderBottomLeftRadius:8
  },
  left: {
    borderBottomLeftRadius:8,
    borderTopLeftRadius:8
  },
  right: {
    borderBottomRightRadius:8,
    borderTopRightRadius:8,
  }
});

export default CrossButton;