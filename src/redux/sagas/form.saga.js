import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* formSaga() {
    yield takeLatest('ADD_ITEM', addItem)
}

function* addItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload)
        yield axios.put({type: 'SET_SHELF', payload: action.payload})
    } catch (error) {
        console.log('Error with add item:', error);
        yield put({ type: 'ADD_ITEM' });
      }
}

export default formSaga;