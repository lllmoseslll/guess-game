import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({children}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#c6fb03",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#c6fb03",
    padding: 12,
  },
});
