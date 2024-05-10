import { StyleSheet } from 'react-native';

import { color } from '../../entities/style'

export const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    uploadButton: {
        backgroundColor: '#DDD',
        width: 72,
        height: 72,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: 210,
        height: 186,
        backgroundColor: '#fff',
        borderRadius: 8,
        position: 'absolute',
        zIndex:3,
        padding: 5,
        left :-10,
        bottom: -186-15,
        justifyContent:'center',
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
        marginBottom:4
    },
    selectButton: {
        width:98,
        height:86,
        marginRight:4,
        backgroundColor:'#F2F2F4',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center'
    }
})