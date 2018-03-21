import { all } from 'redux-saga/effects';
import watchEmployeesSaga from './employees';
import watchBlogSaga from './blog';

export default function* rootSaga() {
    yield all([
        watchEmployeesSaga(),
        watchBlogSaga(),
    ]);
}