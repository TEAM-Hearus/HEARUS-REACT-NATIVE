import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './SignUpEmailStyle'

export default function SignUpEmail({ navigation }) {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputPassword2, setInputPassword2] = useState("");
    const [inputSchool, setInputSchool2] = useState("");
    const [inputMajor, setInputMajor] = useState("");
    const [inputGrade, setInputGrade] = useState("");

    return (
        <View style={styles.container}>
            <Text>이메일로 회원가입</Text>
            <StatusBar style="auto" />
            <TextInput
                placeholder='이름'
                style={styles.input}
                onChangeText={(text) => setInputName(text)}
                value={inputName}
            />
            <TextInput
                placeholder='이메일'
                style={styles.input}
                onChangeText={(text) => setInputEmail(text)}
                value={inputEmail}
            />
            <TextInput
                placeholder='비밀번호'
                style={styles.input}
                onChangeText={(text) => setInputPassword(text)}
                value={inputPassword}
            />
            <TextInput
                placeholder='비밀번호 확인'
                style={styles.input}
                onChangeText={(text) => setInputPassword2(text)}
                value={inputPassword2}
            />
            <TextInput
                placeholder='학교'
                style={styles.input}
                onChangeText={(text) => setInputSchool2(text)}
                value={inputSchool}
            />
            <TextInput
                placeholder='전공'
                style={styles.input}
                onChangeText={(text) => setInputMajor(text)}
                value={inputMajor}
            />
            <TextInput
                placeholder='학년'
                style={styles.input}
                onChangeText={(text) => setInputGrade(text)}
                value={inputGrade}
            />
            <Button />
        </View>
    );
}