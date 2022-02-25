import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
    },
    {
        initialRouteName: "HomeScreen",
        defaultNavigationOptions: {
            title: "Blogs",
        },
    }
);

const App = createAppContainer(navigator);

export default () => {
    return (
        <BlogProvider>
            <App />
        </BlogProvider>
    );
};
