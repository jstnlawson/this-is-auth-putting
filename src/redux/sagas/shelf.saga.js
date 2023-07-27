// - IMPORTS -
import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// - SAGA GENERATOR FUNCTIONS -
// * Listener Saga
function* shelfSaga() {
  yield takeLatest("FETCH_SHELF", fetchShelf);
} // * end shelfSaga

// * Worker Saga: will run on action "FETCH_SHELF"
function* fetchShelf() {
  try {
    // Storing all shelf items from server in variable
    const shelfList = yield axios.get("/api/shelf");

    // Dispatching action to store all shelf items in 'shelfList' reducer
    yield putResolve({ type: "SET_SHELF", payload: shelfList.data });
  } catch (error) {
    console.log("Shelf list GET request failed. Error is:", error);
  }
} // * end fetchShelf

// - EXPORTING shelfSaga -
export default shelfSaga;
