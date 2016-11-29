import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/User'

export function handleLogin(){
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })

        VK.Auth.login((r) => { // eslint-disable-line no-undef
            if (r.session) {
                let username = r.session.user.first_name;

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: username
                })

            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации')
                })
            }
        },4); // запрос прав на доступ к photo

    }
}