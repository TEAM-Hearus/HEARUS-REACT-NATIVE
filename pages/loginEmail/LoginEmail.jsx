import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './LoginEmailStyle'
import { LoginEmailButton } from '../../features/login'

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
            <LoginEmailButton
                inputID={inputID}
                inputPW={inputPW}
            />
        </View>
    );
}

async function onClickLoginButton(inputID, inputPW) {
    console.log(inputID, inputPW)
}