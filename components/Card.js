import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
      <View style={styles.inputContainer}> {children }</View>
 
  )
}

export default Card

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: "#870350",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "BLACK",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    shadowOpacity: 1,
  },
});