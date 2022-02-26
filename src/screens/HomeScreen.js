import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(key) => key.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ShowScreen", {
                                    id: item.id,
                                })
                            }
                        >
                            <View style={styles.blogContainer}>
                                <Text>{item.title}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <AntDesign
                                        name="delete"
                                        style={styles.createBlog}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
            <Button
                title="Add Blog Post"
                onPress={() => navigation.navigate("CreateScreen")}
            />
        </View>
    );
};

HomeScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("CreateScreen")}
            >
                <AntDesign name="plus" style={styles.createBlog} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    blogContainer: {
        borderWidth: 1,
        marginVertical: 4,
        backgroundColor: "#f0fff0",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
    },
    createBlog: {
        alignSelf: "flex-end",
        marginBottom: 8,
        fontSize: 24,
        color: "black",
    },
});

export default HomeScreen;
