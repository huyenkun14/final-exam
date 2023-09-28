import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const Header = (props: any) => {
    const { title, isListScreen } = props
    const navigation = useNavigation<any>()
    return (
        <View>
            {isListScreen ?
                <View style={styles.container}>
                    <View style={styles.icon} />
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Add') }}>
                        <Image style={styles.icon} source={require('../../assets/plus-small.png')} />
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image style={styles.icon} source={require('../../assets/arrow-small-left.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.icon} />
                </View>
            }
        </View>
    )
}

export default Header