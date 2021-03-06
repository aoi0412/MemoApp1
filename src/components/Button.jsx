import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { string, func, shape } from "prop-types";

export default function Button(props) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.buttonContaier, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propsTypes = {
  label: string.isRequired,
  onPress: func.isRequired,
  style: shape(),
};

Button.defaultProps = {
  onPress: null,
  style: null,
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
