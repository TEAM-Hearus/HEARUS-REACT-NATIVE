import { StyleSheet } from 'react-native';

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
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 18,
    },
    schedule: {
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 24
    },
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    month: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    monthText: {
        fontSize: 30
    },
    topButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    switchTypeButton: {
        flex: 1,
        flexDirection: 'row',
    },
    switchWeekButton: {
        width: 78,
        height: 40,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    switchMonthButton: {
        width: 78,
        height: 40,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButton: {
        width: 100,
        height: 40,
        backgroundColor: '#FF6B3D',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        flex: 7,
        backgroundColor: '#FAFAFA'
    },
    weekAxis: {
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        justifyContent: 'flex-end'
    },
    dayHeader: {
        backgroundColor: '#FAFAFA'
    },
    dayTag: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateTag: {
        backgroundColor: '#fff',
        borderColor: '#E5E5EA',
        borderWidth: 1,
        height: 33,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        flexDirection: 'row',
    },
    dayColumn: {
        backgroundColor: '#fff',
        borderColor: '#E5E5EA',
        borderWidth: 1,
    }
});