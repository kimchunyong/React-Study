import { takeLatest, all } from 'redux-saga/effects';

function* kakaoApi() {
    yield console.log('하하하')
}
function* actionWatcher() {
     yield takeLatest('GET_TEXT', kakaoApi)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
