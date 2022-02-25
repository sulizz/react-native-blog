import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";

const HomeScreen = () => {
    const { state, addBlogPost } = useContext(Context);
    console.log(state);
    return (
        <View>
            <Text>Home Screen</Text>
            <FlatList
                data={state}
                keyExtractor={(key) => key.title}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
            <Button title="Add Blog Post" onPress={addBlogPost} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
