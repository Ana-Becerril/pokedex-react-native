import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

const Display = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text>Im a Display</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderRadius: 12,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center'
    },
  });

export default Display


