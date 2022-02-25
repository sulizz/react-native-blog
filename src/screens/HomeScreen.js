import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const HomeScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext);
    // console.log(value);
    return (
        <View>
            <Text>Home Screen</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
            <Button title="Add Blog Post" onPress={addBlogPost} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
