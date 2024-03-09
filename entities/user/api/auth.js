import { axios } from '../../../shared/axios'

async function doLogin(email, password, isOAuth) {
    const res = await axios.post('/auth/login/', { email, password, isOAuth })
    const isOk = res.data;
    return isOk;
}

async function renewToken(token) {
    const res = await axios.get('/auth/renewToken/', {
        params: {
            renewToken: token
        }
    })
    const result = res.data;
    return result;
}

async function signUp(userInfo) {
    const res = await axios.post('/auth/login/', userInfo)
    const isOk = res.data;
    return isOk;
}

export { doLogin, renewToken, signUp }