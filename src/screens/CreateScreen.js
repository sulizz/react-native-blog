import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);
    const [title, setTitle] = useState("");
    const [blog, setBlog] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.title}
                value={title}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setTitle(text)}
                placeholder="Enter the title of your blog"
            />
            <TextInput
                style={styles.content}
                value={blog}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setBlog(text)}
                placeholder="Blog...."
            />
            <Button
                title="Add a new Blog Post"
                onPress={() =>
                    addBlogPost(title, blog, () => {
                        navigation.navigate("HomeScreen");
                    })
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 8,
        padding: 8,
        fontSize: 18,
    },
    title: {
        borderBottomWidth: 1,
        borderColor: "black",
        height: 24,
        marginVertical: 24,
    },
    content: {
        borderBottomWidth: 1,
        borderColor: "black",
        height: 48,
    },
});

export default CreateScreen;
