import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './LoginEmailStyle'

import { login } from '../../entities/user/api'

export default function LoginEmail({ navigation }) {
    const [inputID, setInputID] = useState("");
    const [inputPW, setInputPW] = useState("");

    return (
        <View style={styles.container}>
            <Text>로그인</Text>
            <StatusBar style="auto" />
            <TextInput
                placeholder='이메일'
                style={styles.loginInput}
                onChangeText={(text) => setInputID(text)}
                value={inputID}
            />
            <TextInput
                placeholder='비밀번호'
                style={styles.loginInput}
                onChangeText={(text) => setInputPW(text)}
                value={inputPW}
            />
            <Button
                onPress={async () => await onClickLoginButton(inputID, inputPW)}
                title="로그인"
                disabled={!inputID || !inputPW}
            />
        </View>
    );
}

async function onClickLoginButton(inputID, inputPW) {
    console.log(inputID, inputPW)
    // 값 유효 검사 넣기

    const result = await login(inputID, inputPW, false)
    // const result = {
    //     result : 200,
    //     token : 'testToken'
    // }

    // 임시 코드
    if (result.result === 200) {
        await AsyncStorage.setItem('acess-token', result.token);
        console.log(await AsyncStorage.getItem('acess-token'))
    }

}