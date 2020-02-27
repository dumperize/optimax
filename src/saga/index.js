import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_ITEMS, putItems } from "../actions";

function fetchItems() {
  return fetch("/data/items.json").then(res => res.json());
}

function* workerLoadItems() {
  const data = yield call(fetchItems);

  yield put(putItems(data));
}
export function* watchLoadItems() {
  yield takeEvery(LOAD_ITEMS, workerLoadItems);
}
