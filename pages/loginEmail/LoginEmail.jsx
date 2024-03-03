import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './LoginEmailStyle'

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
                disabled={!inputID||!inputPW}
            />
        </View>
    );
}

async function onClickLoginButton(inputID, inputPW) {
    console.log(inputID, inputPW)
}