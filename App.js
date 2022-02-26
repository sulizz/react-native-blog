import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import HomeScreen from "./src/screens/HomeScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
const navigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        ShowScreen: ShowScreen,
        CreateScreen: CreateScreen,
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
        <Provider>
            <App />
        </Provider>
    );
};
