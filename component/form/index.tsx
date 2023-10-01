import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Form = ({infoCandidate,setInfoCandidate,isEdit}) => {
    
    const handleChangeInfo = (textInputName) => {
        return (value: any) => {
            setInfoCandidate({ ...infoCandidate, [textInputName]: value })
        }
    }
    return (
        <View>
            <Text style={styles.label}>Tên ứng viên</Text>
            <TextInput
                value={infoCandidate.tenUngVien}
                onChangeText={handleChangeInfo('tenUngVien')}
                style={styles.input}
                editable={isEdit}
                placeholder='Nhập tên ứng viên'
            />
            <Text style={styles.label}>Mã số ứng viên</Text>
            <TextInput
                value={infoCandidate.maUngVien}
                onChangeText={handleChangeInfo('maUngVien')}
                style={styles.input}
                editable={isEdit}
                placeholder='Nhập mã số ứng viên'
            />
            <Text style={styles.label}>Mô tả kinh nghiệm</Text>
            <TextInput
                value={infoCandidate.className}
                onChangeText={handleChangeInfo('className')}
                style={[styles.input, { height: 100, textAlignVertical: 'top', paddingVertical: 10 }]}
                multiline={true}
                numberOfLines={4}
                editable={isEdit}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                value={infoCandidate.email}
                onChangeText={handleChangeInfo('email')}
                style={styles.input}
                editable={isEdit}
                placeholder='Nhập địa chỉ email'
            />
            <Text style={styles.label}>Địa chỉ</Text>
            <TextInput
                value={infoCandidate.diaChi}
                onChangeText={handleChangeInfo('diaChi')}
                style={[styles.input, { height: 100, textAlignVertical: 'top', paddingVertical: 10 }]}
                multiline={true}
                numberOfLines={4}
                editable={isEdit}
            />
        </View>
    )
}

export default Form