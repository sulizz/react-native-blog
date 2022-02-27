import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import HomeScreen from "./src/screens/HomeScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        ShowScreen: ShowScreen,
        CreateScreen: CreateScreen,
        EditScreen: EditScreen,
    },
    {
        initialRouteName: "HomeScreen",
        defaultNavigationOptions: {
            title: "Blog",
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
