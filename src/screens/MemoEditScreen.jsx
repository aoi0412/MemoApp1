import React from "react";
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import App from "../../App";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline={true} style={styles.input} />
      </View>

      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
      ></CircleButton>
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});
