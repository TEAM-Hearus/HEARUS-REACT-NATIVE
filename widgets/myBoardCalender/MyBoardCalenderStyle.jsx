import { StyleSheet } from 'react-native';

import { color } from '../../entities/style'

export const styles = StyleSheet.create({
    calenderArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    calenderButton:{
        width:40,
        height:40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calenderVisible:{
        backgroundColor:'#FFF'
    },
    calenderModal:{
        width:262,
        height:100,
        borderRadius: 6,
        position:'absolute',
        bottom:-100,
        left:0,
        zIndex:3
    },
    dayBox: {
        width: 55,
        height: 75,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    dayBoxActive: {
        backgroundColor: '#fff',
        borderRadius: 6,
    },
})