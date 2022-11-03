import { CAP_NHAT_EMAIL } from "../reducers/infoReducer";


export const updateEmail = (email) => async dispatch => {
    try {
        new Promise((resole, reject) => {
            setTimeout(() => {
                resole()
            }, 3000);
        })
        console.log("NHAP EMAIL LEN SERVER");
        dispatch({
            type: CAP_NHAT_EMAIL,
            email: email
        })
    } catch (e) {
    }
}