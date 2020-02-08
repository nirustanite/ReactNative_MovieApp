

const acessToken = (token) => {
    return{
        type: 'AUTH_TOKEN',
        payload: token
    }
}

const logoutuser = () => {
    return{
        type: 'LOGOUT',
        payload: null
    }
}

export const getToken = (token) => (dispatch) => {
   dispatch(acessToken(token))
} 

export const logout = () => (dispatch) => {
    dispatch(logoutuser())
}


export const signInemail = (data) => ({
    apiCall: true,
    path:'/auth/login',
    body: data,
    successType: AUTH_TOKEN,
})

export const AUTH_TOKEN = 'AUTH_TOKEN';
export const LOGOUT = 'LOGOUT';