import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";
const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam("id");
    const currentBlog = state.find((blog) => blog.id === id);

    return (
        <BlogForm
            state={{ title: currentBlog.title, content: currentBlog.content }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => {
                    navigation.pop();
                });
            }}
            buttonTitle="Edit Blog Post"
        />
    );
};

export default EditScreen;
