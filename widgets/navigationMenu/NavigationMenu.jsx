import React, { useState } from "react";
import { Text, TextInput, View, Pressable } from 'react-native';
import { styles } from './NavigationMenuStyle'
import { useNavigationState } from '@react-navigation/native';

export default function NavigationMenu({ navigation }) {
    return (
        <View style={styles.container}>
            <UserView />
            <View style={styles.menuList}>
                <MenuButton
                    pageId={'Home'}
                    pageName={'홈'}
                    navigation={navigation}
                />
                <MenuButton
                    pageId={'KeywordList'}
                    pageName={'키워드 목록'}
                    navigation={navigation}
                />
                <MenuButton
                    pageId={'DownloadedFiles'}
                    pageName={'다운로드 파일'}
                    navigation={navigation}
                />
                <MenuButton
                    pageId={'Schedule'}
                    pageName={'시간표'}
                    navigation={navigation}
                />
                <MenuButton
                    pageId={'SharedStorage'}
                    pageName={'공유함'}
                    navigation={navigation}
                />
            </View>
        </View>
    );
}

function MenuButton({ navigation, pageId, pageName }) {
    const state = useNavigationState(state => state);
    const currentPageName = state.routes[state.index].name

    const isSelected = currentPageName == pageId

    return (
        <Pressable
            style={[
                styles.menuButton,
                isSelected ? styles.menuButtonSelected : ''
            ]}
            onPress={() => navigation.navigate(pageId)}
        >
            <Text
                style={[
                    styles.menuButtonText,
                    isSelected ? styles.menuButtonTextSelected : ''
                ]}
            >{pageName}</Text>
            {isSelected && <View style={styles.selectWing}></View>}
        </Pressable>)
}

function UserView() {
    return (
        <View style={styles.userView}>
            <View style={styles.profile}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 25
                }}>H</Text>
            </View>
            <Text style={styles.userEmail}>hearusteam@gmail.com</Text>
        </View>
    )
}

