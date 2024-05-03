import { StyleSheet } from 'react-native';
import { screen, color } from '../../entities/style'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        flex: 2,
        justifyContent: 'center',
    },
    body: {
        flex: 6,
        width: '100%',
        justifyContent: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'center'

    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 20, // 옆 여백 추가
        paddingBottom: 20, // 아래 여백 추가
    },
    title: {
        fontFamily: "Bold",
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 40,
        textAlign: 'center',
        letterSpacing: -0.03,
        color: '#090909',
    },
    context: {
        width: 817,
        height: 618,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#C1C1C1',
        borderRadius: 20,
    },
    fakePrePage: {
        position: 'absolute',
        width: 817,
        height: 618,
        backgroundColor: '#EAEAEA',
        right: -500,
        bottom: 0,
        borderRadius: 20,
    },
    fakePostPage: {
        position: 'absolute',
        width: 817,
        height: 618,
        left: -500,
        bottom: 0,
        backgroundColor: '#EAEAEA',
        borderRadius: 20,
    },
    barBackground: {
        width: 208,
        height: 6,
        backgroundColor: '#D6D6D6'
    },
    barScroll: {
        height: 6,
        backgroundColor: '#777777'
    },
    buttonNext: {
    },
    buttonText: {
        color: color.defaultBlue,
        fontSize: 20,
    }

});