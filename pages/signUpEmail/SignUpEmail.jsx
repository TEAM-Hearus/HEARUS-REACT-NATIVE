import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './SignUpEmailStyle'

export default function SignUpEmail({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>이메일로 회원가입</Text>
            <StatusBar style="auto" />
        </View>
    );
}