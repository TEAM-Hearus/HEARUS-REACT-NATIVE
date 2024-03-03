import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './LoginOAuthStyle'

export default function LoginOAuth({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>OAuth 로그인</Text>
            <StatusBar style="auto" />
            <Button
                title="xx로 로그인하기"
            />
            {/* 나중에 컴포넌트로 뺄 것*/}
        </View>
    );
}