import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Pressable } from 'react-native';

import { NavigationMenu } from '../../widgets/navigationMenu'
import { styles } from './HomeStyle'
import { BoardIcon } from '../../entities/icon'


export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.neviMenu}>
                <NavigationMenu
                    navigation={navigation}
                />
            </View>
            <View style={styles.body}>
                <View style={styles.top}>
                    <View style={styles.calenderArea}>
                        <View style={styles.dayBox}>
                            <Text>5월</Text>
                            <BoardIcon.Calendar />
                        </View>
                        <View style={styles.dayBox}>
                            <Text>일</Text>
                            <Text>28</Text>
                        </View>
                        <View style={styles.dayBox}>
                            <Text>월</Text>
                            <Text>29</Text>
                        </View>
                        <View style={styles.dayBox}>
                            <Text>화</Text>
                            <Text>30</Text>
                        </View>
                        <View style={styles.dayBox}>
                            <Text>수</Text>
                            <Text>1</Text>
                        </View>
                        <View style={styles.dayBox}>
                            <Text>목</Text>
                            <Text>2</Text>
                        </View>
                        <View style={[styles.dayBox, styles.dayBoxActive]}>
                            <Text>금</Text>
                            <Text>3</Text>
                        </View>
                        <View style={styles.dayBox}>
                            <Text>토</Text>
                            <Text>4</Text>
                        </View>
                    </View>
                    <View style={styles.buttonArea}>
                        <Pressable style={styles.recordStartButton}>
                            <Text>빠른 녹음 시작</Text>
                        </Pressable>
                        <Pressable style={styles.addFileButton}>
                            <BoardIcon.Folder />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.contentArea}>
                    <View style={styles.myBoard}>
                        <View style={styles.myBoardTop}>
                            <View style={styles.myBoardMenu}>
                                <Pressable style={[styles.myBoardMenuItem, styles.myBoardMenuItemSelected]}>
                                    <Text>모든 노트</Text>
                                </Pressable>
                                <Pressable style={styles.myBoardMenuItem}>
                                    <Text>교양 수업</Text>
                                </Pressable>
                                <Pressable style={styles.myBoardMenuItem}>
                                    <Text>전공 수업</Text>
                                </Pressable>
                                <Pressable style={styles.myBoardMenuItem}>
                                    <Text>추가+</Text>
                                </Pressable>
                            </View>
                            <View style={styles.myBoardSubMenu}>
                                <Pressable style={styles.myBoardSubMenuItem}>
                                    <BoardIcon.Menu/>
                                    <Text>태그</Text>
                                </Pressable>
                                <Pressable style={styles.myBoardSubMenuItem}>
                                    <BoardIcon.Favorite/>
                                    <Text>즐겨찾기</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.myBoardContent}></View>
                    </View>
                </View>
                <Pressable style={styles.addRecordButton}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 40
                    }}>+</Text>
                </Pressable>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}