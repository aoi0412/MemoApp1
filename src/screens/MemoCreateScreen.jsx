import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import App from "../../App";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

import firebase from "firebase";

export default function MemoCreateScreen(props) {
  const [bodyText, setBodyText] = useState("");
  const { currentUser } = firebase.auth();
  const { navigation } = props;
  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref
      .add({
        //bodyText: bodyTextと同じ
        bodyText,
        updatedAt: new Date(),
      })
      .then((dogRef) => {
        console.log("Created!", dogRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log("Error!", error);
      });
  }
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline={true}
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        />
      </View>

      <CircleButton name="check" onPress={handlePress}></CircleButton>
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
