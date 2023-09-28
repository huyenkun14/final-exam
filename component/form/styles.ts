import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    label: {
        fontWeight: '600',
        marginVertical: 10,
    },
    input: {
        fontWeight: '500',
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#000',
        height: 40,
        paddingHorizontal: 15,
        color: '#000'
    }
})