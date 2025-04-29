import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

test("length of posts should be incremented", () => {
    const initialState = {
        posts: [
            { id: 1, message: "Hi, how are", likesCount: 12 },
            { id: 2, message: "It's my", likesCount: 11 },
        ],
        newPostText: "hallo",
        profile: null,
        status: ""
    };
    const action = addPostActionCreator();

    const newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("hallo");
});

test("after deleting length of posts should be decrement", () => {
    const initialState = {
        posts: [
            { id: 1, message: "Hi, how are", likesCount: 12 },
            { id: 2, message: "It's my", likesCount: 11 },
        ],
        newPostText: 'hallo',
        profile: null,
        status: ""
    };
    const action = deletePost(1);

    const newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(1);
});
