import { getPosts, getType, createPost, updatePost } from "../actions";
import { INIT_STATE } from "../constant";

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostsFailure):
            return {
                ...state,
                isLoading: false,
            }
        case getType(createPost.createPostsSuccess):
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case getType(updatePost.updatePostsSuccess):
            return {
                ...state,
                data: state.data.map(post => post._id === action.payload._id ? action.payload : post)
            };
        default: return state;
    }
}