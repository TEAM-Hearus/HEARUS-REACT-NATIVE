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
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 20,
    },
    userInfo:{
        flexDirection: 'row',
        alignItems:'center'
    },
    menuList: {
        flex: 9,
        paddingTop:100
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
        marginLeft:16
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
    },
    menuButtonText: {
        color: '#9DA0A6',
        fontSize: 15,
        marginLeft: 8
    },
    menuButtonTextSelected: {
        color: '#272C39'
    },
    selectWing: {
        position: 'absolute',
        backgroundColor: 'black',
        width: 35,
        height: 45,
        left: -25
    }

});