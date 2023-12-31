import { View, Text, ScrollView, TouchableOpacity, Modal, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../component/header'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Form from '../../component/form'
import { deleteCandidate, getCandidateById } from '../../services'

const Detail = ({ route, navigation }) => {
  const { candidateId } = route.params
  const [delStatus, setDelStatus] = useState<boolean>(false)
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [infoCandidate, setInfoCandidate] = useState([]);
  useEffect(() => {
    getCandidate()
  }, [])
  const getCandidate = async () => {
    try {
      const res = await getCandidateById(candidateId)
      setInfoCandidate(res.data)
      console.log(res.data)
    } catch (err: any) {
      const message = err.response
      alert(message)
    }
  }
  const handleDeleteCandidate = async () => {
    try {
      const res = await deleteCandidate(candidateId)
      setModalVisible(false)
      setDelStatus(!delStatus)
      ToastAndroid.show(
        'Đã xóa sinh viên',
        ToastAndroid.LONG
      )
      navigation.navigate('List', {delStatus})
    } catch (err: any) {
      const message = err.response
      alert(message)
    }

  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header title='Thông tin chi tiết sinh viên' isListScreen={false} />
      <ScrollView>
        <Form infoCandidate={infoCandidate} setInfoCandidate={setInfoCandidate} isEdit={false} />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.delete}>Xóa sinh viên</Text>
        </TouchableOpacity>
      </ScrollView>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Bạn chắc chắn muốn xóa ứng viên này?</Text>
              <View style={styles.modalBtnContainer}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalBtn}>Hủy bỏ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleDeleteCandidate}>
                  <Text style={styles.modalBtn}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}

export default Detail