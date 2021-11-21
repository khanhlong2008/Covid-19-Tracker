import { takeLatest, call, put } from "redux-saga/effects"
import * as actions from "../actions"
import * as apis from '../apis'
function* fetchPostSaga(action) {
    const posts = yield call(apis.fetchPosts);
    console.log('[posts', posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data))
}
function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
}

export default mySaga;