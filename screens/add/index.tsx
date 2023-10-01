import { View, Text, ScrollView, TouchableOpacity, ToastAndroid, Modal } from 'react-native'
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
  const [modalVisible, setModalVisible] = useState(false);
  const [infoCandidate, setInfoCandidate] = useState({
    maUngVien: '',
    tenUngVien: '',
    diaChi: '',
    moTaKinhNghiem: '',
    email: '',
  });
  const handleAddCandidate = async () => {
    if (!infoCandidate.diaChi) {
      ToastAndroid.show('Địa chỉ không được để trống!', ToastAndroid.SHORT)
    }
    else if (!infoCandidate.moTaKinhNghiem) {
      ToastAndroid.show('Kinh nghiệm không được để trống!', ToastAndroid.SHORT)
    }
    else if (validateEmail(infoCandidate.email)) {
      ToastAndroid.show('Email sai định dạng!', ToastAndroid.SHORT)
    }
    else if (validateName(infoCandidate.tenUngVien)) {
      ToastAndroid.show('Tên dài tối thiểu 25 ký tự!', ToastAndroid.SHORT)
    }
    else if (validateId(infoCandidate.maUngVien)) {
      ToastAndroid.show('MSSV dài tối thiểu 8 ký tự!', ToastAndroid.SHORT)
    }
    else {
      try {
        const res = await addCandidate(infoCandidate)
        ToastAndroid.show(
          'Đã thêm sinh viên',
          ToastAndroid.LONG
        )
        setAddStatus(!addStatus)
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
        <Form infoCandidate={infoCandidate} setInfoCandidate={setInfoCandidate} isEdit={true} />
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.cancel}>Hủy bỏ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddCandidate}>
            <Text style={styles.save}>Lưu lại</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Bạn chắc chắn muốn bỏ thêm mới ứng viên?</Text>
              <View style={styles.modalBtnContainer}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalBtn}>Ở lại</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('List') }}>
                  <Text style={styles.modalBtn}>Hủy bỏ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}

export default Add