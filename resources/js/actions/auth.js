import axios from "axios"
import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        let body = {
            email, password
        }
        const res = await axios.post('/api/v1/auth/login', body)
        console.log(res)
        if(res.status == 200){
            console.log('entroaqui')
            let data = res.data
            localStorage.setItem('token', data.access_token)
            localStorage.setItem('token-init-time', new Date().getTime())

            dispatch(login(data.user.id, data.user.name))
        }else{
            // falta el error
        }
    }
}

export const startChecking = () => {
    console.log('startcheckin')
    return async (dispatch) => {
        const token = localStorage.getItem('token') || ""
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }
        try {
            const res = await axios.post('http://api-perretes-laravel.test/api/v1/auth/refresh', {} , config)
            if(res.status == 200){
                localStorage.setItem('token', res.data.access_token)
                localStorage.setItem('token-init-time', new Date().getTime())

                dispatch(login(res.data.user.id, res.data.user.name))
            }
        } catch (error) {
            dispatch( checkingFinish() )
        }
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

export const login = ( id, displayName ) => ({
    type: types.authLogin,
    payload: {
        id,
        displayName
    }
});
