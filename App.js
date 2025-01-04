import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedUserNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

   function gameOverHandler() {
     setGameIsOver(true);
   }

  let screen = <StartGameScreen onPickNumber={pickedUserNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen  userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }
 

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#b10870", "#d55b1e"]} style={styles.container}>
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
          {/* <StartGameScreen />; */}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#51142e",
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
