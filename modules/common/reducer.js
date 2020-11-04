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
            ...payload
          },
        },
      };
    default:
      return state;
  }
}
