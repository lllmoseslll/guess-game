import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.accent600,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: colors.accent600,
        fontSize: 36,
        fontWeight: "bold",
    }
})