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
function* createhPostSaga(action) {
    try {
        const posts = yield call(apis.createPosts, action.payload);
        yield put(actions.createPost.createPostsSuccess(posts.data))
    } catch (err) {
        console.error(err)
        yield put(actions.createPost.createPostsFailure(err))
    }
}
function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
    yield takeLatest(actions.createPost.createPostsRequest, createhPostSaga)

}

export default mySaga;