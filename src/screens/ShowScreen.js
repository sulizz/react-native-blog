import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam("id");

    const singleBlogPost = state.find((blogPost) => {
        return blogPost.id === id;
    });

    return (
        <View>
            <Text>Show Screen</Text>
            <Text>{singleBlogPost.title}</Text>
            <Text>{singleBlogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    props.navigation.navigate("EditScreen", {
                        id: props.navigation.getParam("id"),
                    })
                }
            >
                <FontAwesome name="pencil-square-o" size={24} color="black" />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;
