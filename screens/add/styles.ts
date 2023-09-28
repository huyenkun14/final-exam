import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 15,
    },
    cancel: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    save: {
        color: '#000',
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderColor: '#000',
        borderWidth: 1,
    }
})