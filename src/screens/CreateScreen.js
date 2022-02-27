import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";
const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    const onSubmit = (title, content) => {
        addBlogPost(title, content, () => navigation.navigate("HomeScreen"));
    };

    return <BlogForm onSubmit={onSubmit} buttonTitle="Create a Post" />;
};

export default CreateScreen;
