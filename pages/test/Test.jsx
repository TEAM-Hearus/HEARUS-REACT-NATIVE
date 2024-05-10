import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';

import { MyBoardCalender } from '../../widgets/myBoardCalender'
import { UploadButton } from "../../feature/uploadButton";
import { styles } from './TestStyle'

export default function Test({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>템플릿 페이지sss, 복사해서 쓸 것</Text>
            <UploadButton />
            <StatusBar style="auto" />
        </View>
    );
}