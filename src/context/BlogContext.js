//Reducer Refactored
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    //state is our current state, where our state is currently at
    //action is what we pass into the dispatch function

    switch (action.type) {
        case "add_blogPost":
            return [
                ...state,
                {
                    title: action.payload.title,
                    content: action.payload.content,
                },
            ];
        case "delete_blogPost":
            //THIS WAY ALSO WORKS
            // const newBlog = [];

            // for (blog of state) {
            //     if (blog.id != action.payload) {
            //         newBlog.push(blog);
            //     }
            // }
            // return newBlog;
            return state.filter((blog) => blog.id !== action.payload);

        case "edit_blogPost":
            // const newBlog = [];
            // for (blog of state) {
            //     if (blog.id !== action.payload.id) {
            //         newBlog.push(blog);
            //     } else {
            //         // newBlog.push({
            //         //     id: action.payload.id,
            //         //     title: action.payload.title,
            //         //     content: action.payload.content,
            //         // });
            //         newBlog.push(action.payload);
            //     }
            // }
            // return newBlog;

            // return state.map((blog) => {
            //     if (blog.id === action.payload.id) {
            //         return action.payload;
            //     } else {
            //         return blog;
            //     }
            // });

            return state.map((blog) => {
                return blog.id === action.payload.id ? action.payload : blog;
            });
        case "get_blogposts":
            return action.payload;
        default:
            return state;
    }
};

//action function
//makes a request to the Server
const fetchBlogPost = (dispatch) => {
    return async () => {
        //gets concatated with baseURL
        // "http://52f9-2600-1700-bf91-4000-ed47-4bfc-f07e-152e.ngrok.io/blogPosts",
        const response = await jsonServer.get("/blogPosts");
        //response.data = []

        dispatch({
            type: "get_blogposts",
            payload: response.data,
        });
    };
};

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        //1st arg is the url that we want to post the data to.
        //2nd arg is the information that we want to send to our server

        await jsonServer.post("/blogposts", {
            title,
            content,
        });
        // dispatch({
        //     type: "add_blogPost",
        //     payload: {
        //         title,
        //         content,
        //     },
        // });
        if (callback) {
            callback();
        }
    };
};

//directly calls reducer to change state
// const addBlogPost = (dispatch) => {
//     return (title, content, callback) => {
//         dispatch({
//             type: "add_blogPost",
//             payload: {
//                 title: title,
//                 content: content,
//             },
//         });
//         if (callback) {
//             callback();
//         }
//     };
// };

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({
            type: "delete_blogPost",
            payload: id,
        });
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({
            type: "edit_blogPost",
            payload: {
                id: id,
                title: title,
                content: content,
            },
        });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, fetchBlogPost },
    []
);

//Reducer
// import React, { useReducer, useState } from "react";
// const BlogContext = React.createContext();

// const blogReducer = (state, action) => {
//     //state is our current state, where our state is currently at
//     //action is what we pass into the dispatch function

//     switch (action.type) {
//         case "add_blogPost":
//             return [...state, payload];

//         default:
//             return state;
//     }
// };

// export const BlogProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(blogReducer, []);

//     const addBlogPost = () => {
//         dispatch({
//             type: "add_blogPost",
//             payload: { title: `My BlogPost #${state.length + 1}` },
//         });
//     };
//     return (
//         <BlogContext.Provider
//             value={{ state: state, addBlogPost: addBlogPost }}
//         >
//             {children}
//         </BlogContext.Provider>
//     );
// };

// export default BlogContext;

//create a context obj
//show context obj thing.Provider
//give it a value prop that has whatever information we want to share.
//anytime we want to acess to that information
//import useContext and context obj.
// call use context and put it the context obj
//summary throw in a value prop and get a value prop

//using useState and context
// export const BlogProvider = ({ children }) => {
//     const [blogPosts, setBlogPosts] = useState([]);

//     //goal of the function is use our setter to add a new blog post to our state.
//     /*
//         anytime we invoke this call back function,
//         we create a brand new array, copy previous state and add new blog post
//         we use the overall new array to update the state variable using setter.
//     */
//     /*
//         Because the BlogProvider is showing every component in our application our entire app will be updated.
//         When that happens we then pass the new list of blog post into our context
//         Which means we are going to pass new list of Blog Post into our HomeScreen to show all blog post
//         and re-render the flatList
//     */
//     const addBlogPost = () => {
//         //create a new array with []
//         //use spread operator on the blogPosts which copies the entire blogPosts which is our state
//         //add new blog post with obj {}
//         return setBlogPosts([
//             ...blogPosts,
//             { title: `My BlogPost #${blogPosts.length + 1}` },
//         ]);
//     };

//     return (
//         <BlogContext.Provider
//             value={{ data: blogPosts, addBlogPost: addBlogPost }}
//         >
//             {children}
//         </BlogContext.Provider>
//     );
// };
