import React, { useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput, View, Button } from 'react-native';
import { login } from '../../../../entities/user/api'
import axios from 'axios';

export function LoginEmailButton({ inputID, inputPW }) {
    return (<Button
        onPress={async () => await onClickLoginButton(inputID, inputPW)}
        title="로그인"
        disabled={!inputID || !inputPW}
    />)
}

async function onClickLoginButton(inputID, inputPW) {
    console.log(inputID, inputPW, '테스트')

    // 값 유효 검사 넣기
    const result = await login(inputID, inputPW, false)

    if (result === '통과') { //pseudo코드임
        await AsyncStorage.setItem('acess-token', result);
    }
}