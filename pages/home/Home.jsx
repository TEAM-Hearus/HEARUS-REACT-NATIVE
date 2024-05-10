import React, { useState } from "react";
import { Text, FlatList, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationMenu } from '../../widgets/navigationMenu'
import { MyBoardCalender } from '../../widgets/myBoardCalender'
import { UploadButton } from "../../feature/uploadButton";
import { styles } from './HomeStyle'
import { BoardIcon } from '../../entities/icon'

const boardData = [
    {
        title: 'Welcome Hearus',
        datetime: '2024 . 03 . 05 오후 1 : 20',
        isFavorite: false
    },
    {
        title: 'Welcome Hearus',
        datetime: '2024 . 03 . 05 오후 1 : 20',
        isFavorite: false
    },
]

function MyBoardContentItem({ title, datetime, isFavorite, itemMargin }) {
    return (<View style={{
        ...styles.myBoardContentItem,
        marginRight: itemMargin
    }}>
        <View style={styles.myBoardContentItemImg}></View>
        <View style={styles.myBoardContentItemTitle}>
            <BoardIcon.BookMark />
            <Text style={{marginLeft:5}}>{title}</Text>
        </View>
        <Text>{datetime}</Text>
    </View>)
}

export default function Home({ navigation }) {
    const [parentWidth, setParentWidth] = useState(0);

    const onLayout = event => {
        const { width } = event.nativeEvent.layout;
        setParentWidth(width);
    }
    const itemMargin = 40

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
                        <MyBoardCalender />
                    </View>
                    <View style={styles.buttonArea}>
                        <Pressable style={styles.recordStartButton}>
                            <Text>빠른 녹음 시작</Text>
                        </Pressable>
                        <UploadButton />
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
                                    <BoardIcon.Menu />
                                    <Text>태그</Text>
                                </Pressable>
                                <Pressable style={styles.myBoardSubMenuItem}>
                                    <BoardIcon.Favorite />
                                    <Text>즐겨찾기</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.myBoardContent} onLayout={onLayout}>
                            <FlatList
                                data={boardData}
                                renderItem={({ item }) => {
                                    return (<MyBoardContentItem
                                        title={item.title}
                                        datetime={item.datetime}
                                        isFavorite={item.isFavorite}
                                        itemMargin={itemMargin}
                                    ></MyBoardContentItem>)
                                }}
                                keyExtractor={(item, index) => index}
                                numColumns={3}
                            >

                            </FlatList>
                        </View>
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