import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../types';
import CrossButton from '../buttons/crossButton/CrossButton'
import RoundButton from "../buttons/RoundButton";

interface PokedexBottomProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Main'>;
}

const PokedexBottom = ({navigation}: PokedexBottomProps) => {
    const handleClickTop = () => {
        return console.log('top')
      };
    
      const handleClickBottom = () => {
        return console.log('bottom')
      };
    
      const handleClickLeft = () => {
        return console.log('left')
      };
    
      const handleClickRight = () => {
        return console.log('right')
      };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <RoundButton stylesButton={[styles.stylesButtonSmallBlue]} />
        <RoundButton stylesButton={[styles.stylesButtonSmallRed]} />
      </View>
      <View style={styles.bottomContainer}>
        <RoundButton
          onPress={() => {
            navigation.navigate("About");
          }}
          title="About"
          stylesButton={[styles.stylesAboutButton]}
        />
        <CrossButton
          onPressTop={handleClickTop}
          onPressBottom={handleClickBottom}
          onPressLeft={handleClickLeft}
          onPressRight={handleClickRight}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        justifyContent:'space-around',
        alignItems:'center',
    },
    topContainer : {
      flex: 0.1,
      flexDirection:'row',
      justifyContent:'space-around',
      width:150,
      marginRight:50
    },
    bottomContainer : {
      flex: 0.4,
      flexDirection:'row',
      justifyContent:'space-around',
      width:450
    },
    stylesAboutButton: {
      borderRadius: 50,
      width: 80,
      height: 80,
      backgroundColor: 'black',
    },
    stylesButtonSmallBlue: {
      borderRadius: 40,
      width: 60,
      height: 15,
      backgroundColor: 'blue',
    },
    stylesButtonSmallRed: {
      borderRadius: 40,
      width: 60,
      height: 15,
      backgroundColor: 'yellow',
    },
})

export default PokedexBottom