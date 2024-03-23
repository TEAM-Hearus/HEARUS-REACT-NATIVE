import { StyleSheet } from 'react-native';

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
        backgroundColor: '#FF6B3D',
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
        width: 130,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButtonSelected:{
        borderWidth: 0,
        backgroundColor:'black'
    },
    menuButtonText :{
        fontSize:10
    },
    menuButtonTextSelected:{
        color:'white'
    },
    selectWing: {
        position:'absolute',
        backgroundColor:'black',
        width: 35,
        height: 45,
        left:-25
    }

});