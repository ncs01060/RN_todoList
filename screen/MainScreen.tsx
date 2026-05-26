import { FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useState } from "react";
import { loadTodo } from "../db/Store";

import TodoItem from "../components/TodoItem";

function MainScreen() {
  const [items, setItems] = useState<any[]>([]);

  const refresh = async () => {
    const data = await loadTodo();
    setItems(data);
  };

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            isComplate={item.isComplate}
          />
        )}
      ></FlatList>

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
