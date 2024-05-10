import React, { useState } from "react";
import { Text, Modal, View, Pressable } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import { styles } from './MyBoardCalenderStyle'
import { BoardIcon } from '../../entities/icon'

function dayToString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export default function MyBoardCalender() {
    const [selectedDay, setSelectedDay] = useState(new Date())
    const [calenderVisible, setCalenderVisible] = useState(false)
    const weekArray = []
    const weekName = ['일', '월', '화', '수', '목', '금', '토']

    for (let i = 0; i < 7; i++) {
        const newDay = new Date(selectedDay)
        newDay.setDate(newDay.getDate() - newDay.getDay() + i)
        weekArray.push(newDay)
    }

    return (
        <View style={styles.calenderArea}>
            <View style={styles.dayBox}>
                <Text>{selectedDay.getMonth() + 1}월</Text>
                <Pressable style={[
                    styles.calenderButton,
                    calenderVisible ? styles.calenderVisible : ''
                ]}
                    onPress={() => {
                        setCalenderVisible(!calenderVisible)
                    }}>
                    <BoardIcon.Calendar />

                </Pressable>
                <View style={{
                    ...styles.calenderModal,
                    display: calenderVisible ? 'flex' : 'none'
                }}
                >
                    <Calendar
                        style={{
                            borderRadius:6,
                            borderColor:'#E5E5EA',
                            borderWidth:1

                        }}
                        theme={{
                            arrowColor: '#FF6B3D',
                            todayTextColor: '#FF6B3D',
                            selectedDayBackgroundColor: '#FF6B3D',
                        }}
                        onDayPress={day => {
                            setSelectedDay(new Date(day.timestamp))
                        }}
                        markedDates={{
                            [dayToString(selectedDay)]: { selected: true, disableTouchEvent: true }
                        }}
                        monthFormat={'yyyy. MM'} />
                </View>

            </View>
            {
                weekArray.map((date, idx) => {
                    const isSelectedDay = date.getDate() === selectedDay.getDate()

                    return (<Pressable
                        style={[styles.dayBox,
                        isSelectedDay ? styles.dayBoxActive : ''
                        ]}
                        onPress={() => setSelectedDay(new Date(date))}
                        key={idx}>
                        <Text>{weekName[idx]}</Text>
                        <Text>{date.getDate()}</Text>
                    </Pressable>)
                })
            }

        </View>

    )
}