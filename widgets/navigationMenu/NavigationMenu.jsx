import React, { useState } from "react";
import { Text, TextInput, View, Pressable } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import { styles } from './NavigationMenuStyle'
import { MenuIcon } from '../../entities/icon'

export default function NavigationMenu({ navigation }) {
    return (
        <View style={styles.container}>
            <UserView />
            <View style={styles.menuList}>
                <MenuButton
                    pageId={'Home'}
                    pageName={'내 보드'}
                    Icon={MenuIcon.MyBoard}
                    navigation={navigation}
                />
                <MenuButton
                    pageId={'KeywordList'}
                    pageName={'북마크'}
                    Icon={MenuIcon.BookMark}
                    navigation={navigation}
                />
                <MenuButton
                    pageId={'ScheduleWeek'}
                    pageName={'시간표'}
                    Icon={MenuIcon.TimeTable}
                    navigation={navigation}
                />
                <MenuButton
                    pageId={'DownloadedFiles'}
                    pageName={'다운로드'}
                    Icon={MenuIcon.Download}
                    navigation={navigation}
                />

                <MenuButton
                    pageId={'SharedStorage'}
                    pageName={'공유함'}
                    Icon={MenuIcon.Shared}
                    navigation={navigation}
                />
            </View>
        </View>
    );
}

function MenuButton({ navigation, pageId, pageName, Icon }) {
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
            {Icon ? <Icon isAbled={isSelected} /> : ''}
            <Text
                style={[
                    styles.menuButtonText,
                    isSelected ? styles.menuButtonTextSelected : '',
                ]}
            >{pageName}</Text>
        </Pressable>)
}

function UserView() {
    return (
        <View style={styles.userView}>
            <View style={styles.userInfo}>
                <View style={styles.profile}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 25
                    }}>H</Text>
                </View>
                <Text style={styles.userEmail}>Hearus</Text>
            </View>
            <MenuIcon.Setting />
        </View>
    )
}

