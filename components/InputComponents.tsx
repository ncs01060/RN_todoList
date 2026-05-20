import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface Props {
  title: string;
}

function InputComponet(props: Props) {
  const [text, setText] = useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={props.title}
      />
      <Button title="등록" />
    </View>
  );
}

export default InputComponet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
});
