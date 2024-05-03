import { StyleSheet } from 'react-native';
import { color } from '../../entities/style'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userView: {
        flex: 1,
        width: '100%',
        padding: 20
    },
    menuList: {
        flex: 4
    },
    profile: {
        width: 40,
        height: 40,
        backgroundColor: color.defaultOrange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 5,
    },
    userEmail: {
        color: '#6F6F6F',
    },
    menuButton: {
        borderColor: '#BEBEBE',
        borderWidth: 1,
        borderRadius: 10,
        width: 200,
        height: 49,
        alignItems: 'center',
        justifyContent: 'left',
        flexDirection: 'row',
        marginBottom: 20,
        paddingLeft: 18
    },
    menuButtonSelected: {
        borderWidth: 0,
        backgroundColor: '#F1F1F1'
    },
    menuButtonText: {
        fontSize: 15,
        marginLeft: 8
    },
    menuButtonTextSelected: {
        // color: 'white'
    },
    selectWing: {
        position: 'absolute',
        backgroundColor: 'black',
        width: 35,
        height: 45,
        left: -25
    }

});