import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = ({ children, onPress }) => {
//     function pressHandler() {
//     onPress();
//     console.log("pressed");
//   }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>pressed ?[styles.buttonInnercontainer, styles.pressed] : styles.buttonInnercontainer}
        onPress={onPress}
        android_ripple={{ color: "#7f0763" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 16,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnercontainer: {
    backgroundColor: "#de0ead",
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    },
  pressed: {
    opacity: 0.75,
  },
});
