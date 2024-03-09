import React, { useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput, View, Button } from 'react-native';
import axios from 'axios';

export function LoginEmailButton({inputID, inputPW}) {
    return (<Button
        onPress={async () => await onClickLoginButton(inputID, inputPW)}
        title="로그인"
        disabled={!inputID || !inputPW}
    />)
}

async function onClickLoginButton(inputID, inputPW) {
    console.log(inputID, inputPW,'테스트')
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('my-key', value);
        } catch (e) {
            // saving error
        }
    };
    
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('my-key');
            
            if (value !== null) {
                // value previously stored
            }
            return value
        } catch (e) {
            // error reading value
        }
        return value
    };
    const help = await storeData('help')
    const data = await getData()
    console.log(data)
}