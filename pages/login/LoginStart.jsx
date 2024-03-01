import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

function onClickLoginButton() {

}

export default function LoginStart() {

    return (
        <View style={styles.container}>
            <Text>로그인</Text>
            <StatusBar style="auto" />
            <TextInput
                placeholder='이메일'
                style={styles.loginInput}
            ></TextInput>
            <TextInput
                placeholder='비밀번호'
                style={styles.loginInput}
            ></TextInput>
            <Button
                onPress={onClickLoginButton}
                title="로그인"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginInput: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: "80%",
        borderRadius: 20,
        marginTop: 10,
    },
    loginButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 20,
        marginTop: 10,
    }
});