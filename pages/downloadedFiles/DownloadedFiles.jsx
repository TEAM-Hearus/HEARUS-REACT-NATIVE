import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';

import { NavigationMenu } from '../../widgets/navigationMenu'
import { styles } from './DownloadedFilesStyle'


export default function DownloadedFiles({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.neviMenu}>
                <NavigationMenu
                    navigation={navigation}
                />
            </View>
            <View style={styles.body}>
                <Text>다운로드 파일</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}