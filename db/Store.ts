import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadTodo() {
  const data = await AsyncStorage.getItem("todos");

  if (data) {
    const todos = JSON.parse(data);

    return todos;
  }
}
