import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const HomeScreen = () => {
    const { state, dispatch } = useContext(BlogContext);
    console.log(state);
    console.log(dispatch);
    return (
        <View>
            <Text>Home Screen</Text>
            <FlatList
                data={state}
                keyExtractor={(key) => key.title}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
            <Button
                title="Add Blog Post"
                onPress={() => dispatch({ type: "addBlogPost" })}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
