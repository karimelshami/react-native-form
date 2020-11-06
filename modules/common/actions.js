import commonActionTypes from './action-types'

export function submitForm(value) {
    return {
        type: commonActionTypes.SUBMIT_FORM,
        payload: value
    }
}

export function submitFormSuccess(value) {
    return {
        type: commonActionTypes.SUBMIT_FORM_SUCCESS,
        payload: value
    }
}

export function submitFormFail() {
    return {
        type: commonActionTypes.SUBMIT_FORM_FAIL,
        payload: value
    }
}

export function setFormInput(value){
    return{
        type : commonActionTypes.SET_FORM_INPUT,
        payload : value
    }
}

