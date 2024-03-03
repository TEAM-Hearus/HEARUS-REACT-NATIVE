import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './SignUpOAuthStyle'

export default function SignUpOAuth({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>OAuth로 회원가입</Text>
            <StatusBar style="auto" />
        </View>
    );
}