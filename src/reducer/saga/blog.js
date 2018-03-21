import { call, put, takeEvery } from 'redux-saga/effects';

import blog, { actions as blogActions } from '../blog';
import { getRecentBlogPosts } from '../../api/blog';

export function* loadRecentBlogPosts(action) {
    // Set loading state
    yield put({ type: blogActions.setLoading });

    yield put({ type: blogActions.loadRecentBlogPosts });
    // Just call api to get recentBlogPosts
    const recentBlogPosts = yield call(getRecentBlogPosts);
    if(!recentBlogPosts.error) {
        yield put({ type: blogActions.setRecentBlogPosts, payload: recentBlogPosts });
        yield put({ type: blogActions.unsetLoading });
    } else {
        // Do something else when api call failed
        console.log("Failed to load recent blog posts");
    }
}

export default function* watchBlogSaga() {
    yield takeEvery(blogActions.loadRecentBlogPosts, loadRecentBlogPosts);
}