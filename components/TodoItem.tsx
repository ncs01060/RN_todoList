import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  id: string;
  title: string;
}

function TodoItem(props: Props) {
  const { id, title } = props;
  const [isChecked, setChecked] = useState(false);
  return (
    <View id={id} style={styles.container}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text style={isChecked ? styles.checked : undefined}> {title}</Text>
    </View>
  );
}
export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checked: {
    textDecorationLine: "line-through",
  },
});
