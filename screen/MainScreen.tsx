import { StyleSheet, Text, View } from "react-native";
import item from "../data/testData.json";
import TodoItem from "../components/TodoItem";
import { StatusBar } from "expo-status-bar";

function MainScreen() {
  const items = item;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      {items.map((item) => (
        <TodoItem title={item.title} id={item.id} key={item.id} />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

export default MainScreen;

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
