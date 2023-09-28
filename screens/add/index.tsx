import { View, Text, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import Form from '../../component/form'
import { addCandidate } from '../../services'
import { validateEmail, validateId, validateName } from '../../utils/validate'

const Add = ({ navigation }) => {
  const [addStatus, setAddStatus] = useState(false)
  const [infoCandidate, setInfoCandidate] = useState({
    id: '',
    name: '',
    address: '',
    class: '',
    email: '',
  });
  const handleAddSt = async () => {
    if (!infoCandidate.address) {
      ToastAndroid.show('Địa chỉ không được để trống!', ToastAndroid.SHORT)
    }
    else if (validateEmail(infoCandidate.email)) {
      ToastAndroid.show('Email sai định dạng!', ToastAndroid.SHORT)
    }
    else if (validateName(infoCandidate.name)) {
      ToastAndroid.show('Tên dài tối thiểu 20 ký tự!', ToastAndroid.SHORT)
    }
    else if (validateId(infoCandidate.id)) {
      ToastAndroid.show('MSSV dài tối thiểu 5 ký tự!', ToastAndroid.SHORT)
    }
    else {
      try {
        const res = await addCandidate(infoCandidate)
        ToastAndroid.show(
          'Đã thêm sinh viên',
          ToastAndroid.LONG
        )
        setAddStatus(true)
        navigation.navigate('List', { addStatus })
      } catch (err: any) {
        const message = err.response
        alert(message)
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header title='Thêm mới sinh viên' isListScreen={false} />
      <ScrollView>
        <Form infoSt={infoCandidate} setInfoSt={setInfoCandidate} isEdit={true} />
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('List') }}>
            <Text style={styles.cancel}>Hủy bỏ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddSt}>
            <Text style={styles.save}>Lưu lại</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Add