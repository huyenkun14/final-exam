import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    icon: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    title: {
        fontWeight: '600',
        fontSize: 18,
    }
})