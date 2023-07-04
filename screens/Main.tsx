import * as React from "react";
import { View, StyleSheet} from "react-native";
import Pokedex from "../components/pokedex/Pokedex";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../types';

type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

type MainScreenProps = {
  navigation: MainScreenNavigationProp;
};


const MainScreen = ({navigation} : MainScreenProps) => {
  return (
    <View style={styles.container}>
      <Pokedex navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
