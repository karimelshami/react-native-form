import { takeLatest, call, put } from 'redux-saga/effects'
import { commonActions, commonActionTypes, commonApi } from '../common'

function* submitFormSaga() {
  try {
    const response = yield call(commonApi.submitForm)
    yield put(commonActions.submitFormSuccess())
  } catch (error) {
    yield put(commonActions.submitFormFail())
  }
}

function* commonSagas() {
  yield takeLatest(commonActionTypes.SUBMIT_FORM, submitFormSaga)
}

export default commonSagas
