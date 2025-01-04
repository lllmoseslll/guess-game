import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
          {/* <Text style={styles.title}>Opponent's Guess</Text> */}
          <Title>Opponent's Guess</Title>
          {/* Guess */}
          <View>
              <Text>Higher or Lower</Text>
              {/* -+ */}
              
          </View>
          {/* <View>Log Rounds</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20
    },

})