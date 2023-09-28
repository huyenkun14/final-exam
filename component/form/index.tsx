import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Form = ({infoSt,setInfoSt,isEdit}) => {
    
    const handleChangeInfo = (textInputName) => {
        return (value: any) => {
            setInfoSt({ ...infoSt, [textInputName]: value })
        }
    }
    return (
        <View>
            <Text style={styles.label}>Tên sinh viên</Text>
            <TextInput
                value={infoSt.name}
                onChangeText={handleChangeInfo('name')}
                style={styles.input}
                editable={isEdit}
            />
            <Text style={styles.label}>MSSV</Text>
            <TextInput
                value={infoSt.id}
                onChangeText={handleChangeInfo('id')}
                style={styles.input}
                editable={isEdit}
            />
            <Text style={styles.label}>Lớp</Text>
            <TextInput
                value={infoSt.class}
                onChangeText={handleChangeInfo('class')}
                style={styles.input}
                editable={isEdit}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                value={infoSt.email}
                onChangeText={handleChangeInfo('email')}
                style={styles.input}
                editable={isEdit}
            />
            <Text style={styles.label}>Địa chỉ</Text>
            <TextInput
                value={infoSt.address}
                onChangeText={handleChangeInfo('address')}
                style={[styles.input, { height: 100, textAlignVertical: 'top', paddingVertical: 10 }]}
                multiline={true}
                numberOfLines={4}
                editable={isEdit}
            />
        </View>
    )
}

export default Form