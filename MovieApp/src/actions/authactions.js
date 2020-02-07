

const acessToken = (token) => {
    return{
        type: 'AUTH_TOKEN',
        token
    }
}

const logoutuser = () => {
    return{
        type: 'LOGOUT'
    }
}


export const getToken = (token) => (dispatch) => {
    dispatch(acessToken(token))
}

export const logout = () => (dispatch) => {
    console.log("hello")
    dispatch(logoutuser())
}

export const AUTH_TOKEN = 'AUTH_TOKEN';
export const LOGOUT = 'LOGOUT';