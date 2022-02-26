import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam("id");
    const currentBlog = state.find((blog) => blog.id === id);

    const [title, setTitle] = useState(currentBlog.title);
    const [content, setContent] = useState(currentBlog.content);

    return (
        <View style={styles.container}>
            <Text>Edit Screen</Text>
            <TextInput
                style={styles.title}
                value={title}
                onChangeText={(newText) => setTitle(newText)}
            />
            <TextInput
                style={styles.content}
                value={content}
                onChangeText={(newText) => setContent(newText)}
            />
            <Button
                title="Done Editing"
                onPress={() =>
                    editBlogPost(id, title, content, () => {
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

export default EditScreen;
