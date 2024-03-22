import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Animated } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { styles } from './OnboardingStyle'
import { pagesList } from './OnboardingPages'

export default function Onboarding({ navigation }) {
    const [page, setPage] = useState(0)
    const maxPage = pagesList.length

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>{pagesList[page].title}</Text>
            </View>
            <View style={styles.body}>
                {page === maxPage - 1 ? '' : <FakePreCard />}
                {page === 0 ? '' : <FakePostCard page={page} />}
                <ContentCard page={page} />

            </View>
            <View style={styles.bottom}>
                <PagenationBar
                    page={page}
                    maxPage={maxPage}
                />
                <NextButton
                    onPress={() => setPage(page + 1)}
                />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

function PagenationBar({ page, maxPage }) {
    const widthBackground = 208
    const widthScroll = Math.floor(widthBackground / maxPage)

    const scrollAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(scrollAnim, {
            toValue: widthScroll * page,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [page])

    return (
        <View style={{
            ...styles.barBackground,
            width: widthBackground
        }}>
            <Animated.View style={{
                ...styles.barScroll,
                width: widthScroll,
                transform: [{ translateX: scrollAnim }]
            }} />
        </View>
    )
}

function NextButton({ onPress }) {
    return (
        <Button
            onPress={onPress}
            title="다음"
        />
    )
}

function FakePostCard({ page }) {
    const moveAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    useEffect(() => {
        Animated.timing(moveAnim, {
            toValue: { x: 0, y: 0 },
            duration: 0,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(moveAnim, {
                toValue: { x: -470, y: 30 },
                duration: 300,
                useNativeDriver: true,
            }).start()
        });
    }, [page])

    return (
        <Animated.View style={{
            ...styles.fakePostPage,
            transform: [{ translateX: moveAnim.x },
            { translateY: moveAnim.y }]
        }} />
    )
}

function FakePreCard() {
    return (
        <View style={styles.fakePrePage} />
    )
}

function ContentCard({ page }) {
    const PageComponent = pagesList[page].Content;
    const moveAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    useEffect(() => {
        Animated.timing(moveAnim, {
            toValue: { x: 470, y: 30 },
            duration: 0,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(moveAnim, {
                toValue: { x: 0, y: 0 },
                duration: 300,
                useNativeDriver: true,
            }).start()
        });
    }, [page])

    return (
        <Animated.View
            style={{
                transform: [{ translateX: moveAnim.x },
                { translateY: moveAnim.y }]
            }}>
            <Shadow
                offset={[0, 2]}
                distance={4}
            >
                <View style={styles.context}>
                    <PageComponent />
                </View>
            </Shadow>
        </Animated.View>
    )
}