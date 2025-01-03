import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/*buttons*/}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttons}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#b4076c",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "BLACK",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    shadowOpacity: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 24,
    borderBottomColor: "#e1f105",
    borderBottomWidth: 2,
    color: "#e1f105",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttons: {
    width: "50%",
  },
});
