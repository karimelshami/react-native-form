import { initialState } from "../../redux/initialState";
import { commonActionTypes } from "../../modules/common";

export function commonReducer(state = initialState, { payload, type }) {
  switch (type) {
    case commonActionTypes.SET_FORM_INPUT:
      return {
        ...state,
        ...{
          form: {
            ...state.form,
            ...payload,
          },
        },
      };
    case commonActionTypes.SUBMIT_FORM:
      return {
        ...state,
      };
    case commonActionTypes.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        status: "SUBMIT_FORM_SUCCESS",
      };
    case commonActionTypes.SUBMIT_FORM_FAIL:
      return {
        ...state,
        status: "SUBMIT_FORM_FAIL",
      };
    default:
      return state;
  }
}
