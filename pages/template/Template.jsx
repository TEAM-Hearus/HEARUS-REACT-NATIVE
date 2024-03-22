import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './TemplateStyle'

export default function Template({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>템플릿 페이지, 복사해서 쓸 것</Text>
            <StatusBar style="auto" />
        </View>
    );
}