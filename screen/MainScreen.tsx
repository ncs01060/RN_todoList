import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useEffect, useState } from "react";

import TodoItem from "../components/TodoItem";

function MainScreen() {
  const [items, setItems] = useState<any[]>([]);

  const loadTodo = async () => {
    const data = await AsyncStorage.getItem("todos");

    if (data) {
      const todos = JSON.parse(data);

      setItems(todos);
    }
  };

  useEffect(() => {
    loadTodo();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTodo();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>

      {items.map((item) => (
        <TodoItem key={item.id} id={item.id} title={item.title} />
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
