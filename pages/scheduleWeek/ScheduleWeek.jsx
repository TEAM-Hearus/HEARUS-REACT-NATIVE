import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Pressable } from 'react-native';

import { NavigationMenu } from '../../widgets/navigationMenu'
import { styles } from './ScheduleWeekStyle'


export default function ScheduleWeek({ navigation }) {
    const [scheduleWidth, setScheduleWidth] = useState(0);
    const [scheduleHeight, setScheduleHeight] = useState(0);

    const onLayout = event => {
        const { width, height } = event.nativeEvent.layout;
        setScheduleWidth(width);
        setScheduleHeight(height);
    }

    const dayAxisHeight = 73
    const timeAxisWidth = 39

    const dayColumnWidth = Math.floor((scheduleWidth - timeAxisWidth) / 7)
    const timeRowHeight = Math.floor((scheduleHeight - dayAxisHeight) / 64)

    return (
        <View style={styles.container}>
            <View style={styles.neviMenu}>
                <NavigationMenu
                    navigation={navigation}
                />
            </View>
            <View style={styles.body}>
                <View style={styles.schedule}>
                    <View style={styles.top}>
                        <View style={styles.month}>
                            <Text style={styles.monthText}>2200년 5월</Text>
                        </View>
                        <View style={styles.topButton}>
                            <View style={styles.switchTypeButton}>
                                <Pressable style={styles.switchWeekButton}>
                                    <Text>주간</Text>
                                </Pressable>
                                <Pressable style={styles.switchMonthButton}>
                                    <Text>월간</Text>
                                </Pressable>
                            </View>
                            <Pressable style={styles.addButton}>
                                <Text>일정 추가+</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.main} onLayout={onLayout}>
                        <View style={{
                            ...styles.weekAxis,
                            height: dayAxisHeight,
                            width: '100%'
                        }}>
                            <DayHeader dayColumnWidth={dayColumnWidth} />
                            <DayHeader dayColumnWidth={dayColumnWidth} />
                            <DayHeader dayColumnWidth={dayColumnWidth} />
                            <DayHeader dayColumnWidth={dayColumnWidth} />
                            <DayHeader dayColumnWidth={dayColumnWidth} />
                            <DayHeader dayColumnWidth={dayColumnWidth} />
                            <DayHeader dayColumnWidth={dayColumnWidth} />
                        </View>
                        <View style={styles.bottom}>
                            <View style={{
                                ...styles.timeAxis,
                                width: timeAxisWidth,
                                height: '100%',
                                backgroundColor: '#FAFAFA'
                            }}>
                                {timeAxisMaker(timeRowHeight)}
                            </View>
                            <View style={{
                                ...styles.dayColumn,
                                width: dayColumnWidth,
                                height:'100%'
                            }}>
                            </View>
                            <View style={{
                                ...styles.dayColumn,
                                width: dayColumnWidth,
                                height:'100%'
                            }}>
                            </View>
                            <View style={{
                                ...styles.dayColumn,
                                width: dayColumnWidth,
                                height:'100%'
                            }}>
                            </View>
                            <View style={{
                                ...styles.dayColumn,
                                width: dayColumnWidth,
                                height:'100%'
                            }}>
                            </View>
                            <View style={{
                                ...styles.dayColumn,
                                width: dayColumnWidth,
                                height:'100%'
                            }}>
                            </View>
                            <View style={{
                                ...styles.dayColumn,
                                width: dayColumnWidth,
                                height:'100%'
                            }}>
                            </View>
                            <View style={{
                                ...styles.dayColumn,
                                width: dayColumnWidth,
                                height:'100%'
                            }}>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

function DayHeader({ dayName = '일', date = 30, dayColumnWidth }) {
    return (
        <View style={{
            ...styles.dayHeader,
            width: dayColumnWidth,
            height: '100%'
        }}>
            <View style={styles.dayTag}>
                <Text>일</Text>
            </View>
            <View style={styles.dateTag}>
                <Text>25</Text>
            </View>
        </View>
    )
}

function timeAxisMaker(timeRowHeight) {
    const result = []
    result.push(<View style={{
        width: '100%',
        height: Math.floor(timeRowHeight / 2)
    }}
        key={'start'} />)
    for (let i = 9; i < 20; i++) {
        result.push(<View style={{
            width: '100%',
            height: timeRowHeight,
            alignItems: 'center',
            justifyContent: 'center'
        }}
            key={`${i}-text`}>
            <Text>{i}</Text>
        </View>)
        result.push(<View style={{
            width: '100%',
            height: timeRowHeight * 5
        }}
            key={`${i}-wide`}>
        </View>)
    }
    return result
}