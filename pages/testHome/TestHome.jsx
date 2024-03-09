import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './TestHomeStyle'
import {LoginEmailButton} from '../../features/login'

export default function TestHome({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>테스트 페이지, 모든 페이지 연결해두기</Text>
            <StatusBar style="auto" />
            <Button
                title="LoginEmail"
                onPress={() => navigation.navigate('LoginEmail')}
            />
            <Button
                title="loginOAuth"
                onPress={() => navigation.navigate('LoginOAuth')}
            />
            <Button
                title="signUpEmail"
                onPress={() => navigation.navigate('SignUpEmail')}
            />
            <Button
                title="signUpOAuth"
                onPress={() => navigation.navigate('SignUpOAuth')}
            />
            <LoginEmailButton
            inputID={1} 
            inputPW={3}/>
        </View>
    );
}