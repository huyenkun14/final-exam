import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    delete: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 20,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#fff',
        marginTop: 100,
        padding: 20,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 20,
    },
    modalBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalBtn: {
        marginLeft: 20,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 1,
    }
})