

export const acessToken = (token) => {
    return{
        type: 'AUTH_TOKEN',
        token
    }
}

export const fbLogout = () => {
    return{
        type: 'FB_LOGOUT'
    }
}


export const getToken = (token) => (dispatch) => {
    dispatch(acessToken(token))
}

export const AUTH_TOKEN = 'AUTH_TOKEN';
export const FB_LOGOUT = 'FB_LOGOUT';