import { StyleSheet } from 'react-native';

import { color } from '../../entities/style'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    neviMenu: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        flex: 5,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'column'
    },
    top: {
        flex: 1,
        flexDirection: 'row',

    },
    calenderArea: {
        flex: 3,

        flexDirection: 'row',
        alignItems: 'center',
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
    buttonArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse'
    },
    recordStartButton: {
        width: 180,
        height: 72,
        backgroundColor: color.defaultOrange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 18
    },
    addFileButton: {
        backgroundColor: '#DDD',
        width: 72,
        height: 72,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentArea: {
        flex: 9,
        paddingTop: 24,
    },
    myBoard: {
        flex: 1,
        backgroundColor: '#fff'
    },
    myBoardTop: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        height: 62,
        flexDirection: 'row',
    },
    myBoardMenu: {
        flex:4,
        flexDirection: 'row',
        height: 62,
    },
    myBoardMenuItem: {
        width: 94,
        height: 62,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    myBoardMenuItemSelected: {
        borderBottomColor : '#333',
        borderBottomWidth : 2 
    },
    myBoardSubMenu:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 41
    },
    myBoardSubMenuItem:{
        height: 62,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:22
    },
    myBoardContent: {
        flex: 9,
    },
    addRecordButton: {
        position: 'absolute',
        backgroundColor: '#171717',
        width: 68,
        height: 68,
        borderRadius: 34,
        right: 50,
        bottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }

});