import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.buttonContaier}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}

Button.propsTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContaier: {
    backgroundColor: "#467fd3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: "#ffffff",
  },
});
