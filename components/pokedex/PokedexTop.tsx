import React from 'react'
import { View, StyleSheet } from 'react-native'
import Display from '../display/Display'

const PokedexTop = () => {
  return (
    <View style={styles.container}>
        <Display/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 0.6,
      paddingBottom:20,
    },
})

export default PokedexTop