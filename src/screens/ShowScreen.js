import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam("id");

    const singleBlogPost = state.find((blogPost) => {
        return blogPost.id === id;
    });

    console.log(singleBlogPost);
    return (
        <View>
            <Text>Show Screen</Text>
            <Text>{singleBlogPost.title}</Text>
            <Text>{singleBlogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;
