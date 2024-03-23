import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';

import { NavigationMenu } from '../../widgets/navigationMenu'
import { styles } from './KeywordListStyle'


export default function KeywordList({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.neviMenu}>
                <NavigationMenu
                    navigation={navigation}
                />
            </View>
            <View style={styles.body}>
            <Text>키워드 리스트</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}