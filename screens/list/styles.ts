import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window')
export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchInput: {
        height: 35,
        width: 250,
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#000',
        borderWidth: 1,
        color: '#000',
    },
    searchText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#000',
        borderWidth: 1,
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    itemContainer: {
        paddingVertical: 15,
    },
    itemName: {
        fontWeight: '600',
        marginBottom: 10,
    },
    itemCode: {

    },
    itemEmail: {

    }
})