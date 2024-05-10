import React, { useState } from "react";
import { Text, Modal, View, Pressable } from 'react-native';

import { styles } from './UploadButtonStyle'
import { BoardIcon } from '../../entities/icon'

export default function UploadButton() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.uploadButton}
                onPress={() => setIsVisible(!isVisible)}>
                <BoardIcon.Folder />
            </Pressable>
            <View style={{
                ...styles.modal,
                display: isVisible ? 'flex' : 'none'
            }}>
                <View style={styles.row}>
                    <Pressable style={styles.selectButton}>
                        <Text>카메라</Text>
                    </Pressable>
                    <Pressable style={styles.selectButton}>
                        <Text>이미지</Text>
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <Pressable style={styles.selectButton}>
                        <Text>영상 파일</Text>
                    </Pressable>
                    <Pressable style={styles.selectButton}>
                        <Text>링크 삽입</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}