import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Animated, Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { styles } from './OnboardingStyle'
import { pagesList } from './OnboardingPages'
import { screen } from '../../entities/style'

export default function Onboarding({ navigation }) {
    const [page, setPage] = useState(0)
    const maxPage = pagesList.length

    const increasePage = () => {
        if (page < maxPage - 1) setPage(page + 1)
    }
    // const decreasePage = () => {
    //     if (page > 0) setPage(page - 1)
    // }

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
            </View>
            <View style={styles.buttonContainer}>
                {page === maxPage - 1 ?
                    <StartButton
                        onPress={() => navigation.navigate('Home')}
                    /> :
                    <NextButton
                        onPress={increasePage}
                    />}
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
        <Pressable
            onPress={onPress}
            style={styles.buttonNext}
        >
            <Text
                style={styles.buttonText}>다음{'>'}</Text>
        </Pressable>
    )
}

function StartButton({ onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.buttonNext}
        >
            <Text
                style={styles.buttonText}>시작하기{'>'}</Text>
        </Pressable>
    )
}

function FakePostCard({ page }) {
    const moveAnim = useRef(new Animated.ValueXY({
        x: screen.halfWidth - 857 + 500,
        y: -70
    })).current;

    useEffect(() => {
        Animated.timing(moveAnim, {
            toValue: {
                x: screen.halfWidth - 857 + 500,
                y: -70
            },
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
    const moveAnim = useRef(new Animated.ValueXY({
        x: screen.halfWidth - 857 + 500,
        y: 70
    })).current;

    useEffect(() => {
        Animated.timing(moveAnim, {
            toValue: { x: screen.halfWidth - 857 + 500, y: 70 },
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
                { translateY: moveAnim.y }],
                alignItems: 'center',
                justifyContent: 'center',
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