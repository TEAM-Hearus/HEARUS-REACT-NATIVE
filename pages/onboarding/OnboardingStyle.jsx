import { StyleSheet } from 'react-native';

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
        justifyContent: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'center'

    },
    buttonContainer: {
        flex: 0.5,
        width:'100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 20, // 옆 여백 추가
        paddingBottom: 20, // 아래 여백 추가
    },
    title: {
        fontFamily: "Bold",
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        letterSpacing: -0.03,
        color: '#090909',
    },
    context: {
        width: 400,
        height: 250,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#C1C1C1',
        // shadowOffset: { width: 0, height: 100 },
        // shadowRadius: 4,
        // shadowOpacity: 0.15,
        borderRadius: 20,
    },
    fakePrePage: {
        position: 'absolute',
        width: 400,
        height: 250,
        backgroundColor: '#EAEAEA',
        left: 470,
        top: 50,
        borderRadius: 20,
    },
    fakePostPage: {
        position: 'absolute',
        width: 400,
        height: 250,
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
        color:'#415BFF',
    }

});