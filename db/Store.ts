import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadTodo() {
  const data = await AsyncStorage.getItem("todos");

  if (data) {
    const todos = JSON.parse(data);

    return todos;
  }
}

export async function createTodo(title: string) {
  try {
    const data = await AsyncStorage.getItem("todos");
    const todos = data ? JSON.parse(data) : [];
    todos.push({
      id: Date.now(),

      title: `${title}`,
      isComplate: false,
    });
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
    return true;
  } catch {
    throw Error();
  }
}
