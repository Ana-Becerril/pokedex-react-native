import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../types';
import PokedexBottom from './PokedexBottom';
import PokedexTop from './PokedexTop';

interface PokedexProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Main'>;
}

const Pokedex = ({navigation}: PokedexProps) => {
  return (
    <View style={styles.container}>
        <PokedexTop/>
        <PokedexBottom navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: 'red',
    },
})

export default Pokedex
