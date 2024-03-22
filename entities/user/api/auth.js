import { axios } from '../../../shared/axios'

async function login(email, password, isOAuth) {
    console.log('로그인 요청 보냄')
    // const res = await axios.post('/auth/login/', { email, password, isOAuth })
    // const isOk = res.data;
    // return isOk;

    return {
        result : 200,
        token : 'testToken'
    }
}

async function renewToken(token) {
    console.log('토큰을 새로 고침')
    // const res = await axios.get('/auth/renewToken/', {
    //     params: {
    //         renewToken: token
    //     }
    // })
    // const result = res.data;
    // return result;

    return {
        result : 200
    }
}

async function signUp(userInfo) {
    console.log('회원가입을 함')
    // const res = await axios.post('/auth/login/', userInfo)
    // const isOk = res.data;
    // return isOk;

    return {
        result : 200
    }
}

export { login, renewToken, signUp }