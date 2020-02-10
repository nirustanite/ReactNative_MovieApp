import request from "superagent";
import { url } from '../../constants';

const acessToken = (token) => {
    return {
        type: 'AUTH_TOKEN',
        payload: token
    }
}

const errmessage = (data) => {
    return {
        type: 'ERR_AUTH_TOKEN',
        payload: data
    }
}


const logoutuser = () => {
    return {
        type: 'LOGOUT',
        payload: null
    }
}

// action for storing the token
export const getToken = (token) => (dispatch) => {
    dispatch(acessToken(token))
}

// action for logout
export const logout = () => (dispatch) => {
    dispatch(logoutuser())
}

// request for signin by email
export const signInemail = (data) => (dispatch) => {
    request
        .post(`${url}/auth/login`)
        .set('Content-Type', 'multipart/form-data')
        .field("usename", data.username)
        .field("password", data.password)
        .then(response => {
            dispatch(accessToken(response.body.data.token))
        })
        .catch(err => {
            dispatch(errmessage(err.response.body))
        })

}

export const AUTH_TOKEN = 'AUTH_TOKEN';
export const LOGOUT = 'LOGOUT';
export const ERR_AUTH_TOKEN = 'ERR_AUTH_TOKEN'