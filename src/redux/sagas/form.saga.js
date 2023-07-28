import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* formSaga() {
    yield takeLatest('ADD_ITEM', addItem)
}

function* addItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload)
       // yield put({type: 'SET_SHELF', payload: action.payload})
       yield put({ type: 'FETCH_SHELF' }); 
    } catch (error) {
        console.log('Error with add item:', error);
      }
}

export default formSaga;