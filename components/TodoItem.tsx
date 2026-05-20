import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  id: string;
  title: string;
  isComplate: boolean;
}

function TodoItem(props: Props) {
  const { id, title, isComplate } = props;
  const [isChecked, setChecked] = useState(isComplate);
  const chageCheckBox = async () => {
    setChecked(!isChecked);
    const data = await AsyncStorage.getItem("todos");

    const todos = data ? JSON.parse(data) : [];
    const isComplate = !isChecked;
    const updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        return {
          ...todo,

          title,

          isComplate,
        };
      }

      return todo;
    });

    await AsyncStorage.setItem(
      "todos",

      JSON.stringify(updatedTodos),
    );
  };
  return (
    <View id={id} style={styles.container}>
      <Checkbox
        value={isChecked}
        onValueChange={chageCheckBox}
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
