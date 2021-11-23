import { createActions, createAction } from 'redux-actions'

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
})
export const createPost = createActions({
    createPostsRequest: (payload) => payload,
    createPostsSuccess: (payload) => payload,
    createPostsFailure: (err) => err,
})
export const updatePost = createActions({
    updatePostsRequest: (payload) => payload,
    updatePostsSuccess: (payload) => payload,
    updatePostsFailure: (err) => err,
})
export const showModel = createAction('SHOW_CREATEM_POST_MODEL')
export const hideModel = createAction('HIDE_CREATEM_POST_MODEL')