import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputComponet from "./components/InputComponents";
import TodoItem from "./components/TodoItem";
import item from "./data/testData.json";

export default function App() {
  const items = item;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      {items.map((item) => (
        <TodoItem title={item.title} id={item.id} key={item.id} />
      ))}

      <InputComponet title="title" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
