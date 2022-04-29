import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import firebase from "firebase";

// require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAGGBKKeUefRHgA2VJAIdvxepjBNU5EJyI",
  authDomain: "memoapp1-698f1.firebaseapp.com",
  projectId: "memoapp1-698f1",
  storageBucket: "memoapp1-698f1.appspot.com",
  messagingSenderId: "12383178562",
  appId: "1:12383178562:web:dd1017f950075a5b9fc2db",
};
const Stack = createNativeStackNavigator();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#467fd3",
          },
          headerTitleStyle: {
            color: "#ffffff",
          },
          headerTitle: "Memo App",
          // 戻るボタン
          headerTintColor: "#ffffff",
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
