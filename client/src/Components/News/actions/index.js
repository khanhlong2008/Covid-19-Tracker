import { createActions, createAction } from 'redux-actions'

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
})

export const showModel = createAction('SHOW_CREATEM_POST_MODEL')
export const hideModel = createAction('HIDE_CREATEM_POST_MODEL')