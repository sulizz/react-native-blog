import React, { useReducer, useState } from "react";
const BlogContext = React.createContext();

const reducer = (state, action) => {
    //state is our current state, where our state is currently at
    //action is what we pass into the dispatch function

    switch (action.type) {
        case "addBlogPost":
            return [...state, { title: `My BlogPost #${state.length + 1}` }];

        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [
        { title: "My BlogPost #1" },
    ]);

    return (
        <BlogContext.Provider value={{ state: state, dispatch: dispatch }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;

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
