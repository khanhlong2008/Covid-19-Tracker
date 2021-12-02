import { takeLatest, call, put } from "redux-saga/effects"
import * as actions from "../actions"
import * as apis from '../apis'
function* fetchPostSaga(action) {
    try {
        const posts = yield call(apis.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data))
    } catch (err) {
        console.error(err)
        yield put(actions.getPosts.getPostsFailure(err))
    }
}
function* createdPostSaga(action) {
    try {
        const posts = yield call(apis.createPosts, action.payload);
        yield put(actions.createPost.createPostsSuccess(posts.data))
    } catch (err) {
        console.error(err)
        yield put(actions.createPost.createPostsFailure(err))
    }
}
function* updatePostSaga(action) {
    try {
        const updatedPost = yield call(apis.updatePosts, action.payload);
        yield put(actions.updatePost.getPostsSuccess(updatedPost.data))
    } catch (err) {
        console.error(err)
        yield put(actions.updatePost.getPostsFailure(err))
    }
}



function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
    yield takeLatest(actions.createPost.createPostsRequest, createdPostSaga)
    yield takeLatest(actions.updatePost.updatePostsRequest, updatePostSaga)
}

export default mySaga;