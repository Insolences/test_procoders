import { authenticationTypes } from "./types";
import { authenticationAPI } from "../../api/authentication";

const singIn = () => {
    return { type: authenticationTypes.SING_IN };
};

const singInSuccess = (payload) => {
    return { type: authenticationTypes.SING_IN_SUCCESS, payload };
}

const singInFail = (payload) => {
    return { type: authenticationTypes.SING_IN_FAIL, payload };
}

const singOut = () => {
    return { type: authenticationTypes.SING_OUT };
};

const requestSignIn = (formData) => {
    const api  = authenticationAPI()
    return async (dispatch) => {

        const {status, message, data} = await api.singIn(formData);

        if (status==='err') {
            return dispatch(
                singInFail({status, statusText:message}),
            );
        }

        dispatch(singInSuccess({status, data}));
    };
};

const authenticationActions = {
    singIn,
    singOut,
    requestSignIn,
    singInSuccess,
    singInFail
};

export default authenticationActions;