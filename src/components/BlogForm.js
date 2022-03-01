import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const BlogForm = ({ onSubmit, buttonTitle, state }) => {
    const [title, setTitle] = useState(state.title);
    const [content, setContent] = useState(state.content);

    console.log(state);
    return (
        <View style={styles.container}>
            <TextInput
                value={title}
                style={styles.title}
                onChangeText={(newText) => setTitle(newText)}
            />
            <TextInput
                style={styles.content}
                value={content}
                onChangeText={(newText) => setContent(newText)}
            />
            <Button
                title={buttonTitle}
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};
//default props
BlogForm.defaultProps = {
    state: {
        title: "",
        content: "",
    },
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

export default BlogForm;
