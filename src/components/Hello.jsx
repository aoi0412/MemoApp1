import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { bool, shape, string } from "prop-types";

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      {/* ${}を使うことで変数を文字列をいれることが可能 */}
      {/* ``を使っていることに注意 */}
      <Text style={[styles.text, style]}>{`Hello ${children}${bang ? "!" : ""}`}</Text>
    </View>
  );
}

//変数の型を定義
Hello.propTypes = {
  // isRequiredはchildren引数が必須であることを示す
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
