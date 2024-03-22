import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './OnboardingStyle'

export const pagesList = [
    {
        title : '실시간 녹음 자막으로 더 편리하게 듣고 볼 수 있어요',
        Content : () => {
            return (
                <Text>페이지1</Text>
            )
        }
    },
    {
        title : '이해하기 쉬운 자동 요약과 키워드 분석을 사용해보세요',
        Content : () => {
            return (
                <Text>페이지2</Text>
            )
        }
    },
    {
        title : '외국어 영상도 실시간 번역 스크립트로 막힘 없이 즐겨보세요',
        Content : () => {
            return (
                <Text>페이지3</Text>
            )
        }
    },
]