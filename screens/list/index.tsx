import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../component/header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { getAllCandidate } from '../../services'

const List = ({ route, navigation }) => {

  const addStatus = route.params
  const [text, onChangeText] = useState<any>('')
  const [listCandidate, setListCandidate] = useState([])
  useEffect(() => {
    getListCandidate()
  }, [text, addStatus])
  const getListCandidate = async () => {
    try {
      const res = await getAllCandidate()
      setListCandidate(res.data.items)
      console.log(res)
    } catch (err: any) {
      const message = err.response
      alert(message)
    }
  }

  const renderListCandidates = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('Detail', { candidateId: item.id }) }}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.tenUngVien}</Text>
          <Text style={styles.itemCode}>{item.maUngVien}</Text>
          <Text style={styles.itemEmail}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const handleSearch = () => {
    const resultSearch = listCandidate?.filter(item =>
      item.tenUngVien.toLowerCase().includes(text.toLowerCase())
    )
    console.log(resultSearch)
    setListCandidate(resultSearch)
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header title='Danh sách sinh viên' isListScreen={true} />
      <View>
        <View style={styles.searchContainer}>
          <TextInput
            value={text}
            onChangeText={onChangeText}
            style={styles.searchInput}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Text style={styles.searchText}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={listCandidate}
          keyExtractor={(item) => item.id}
          renderItem={renderListCandidates}
          ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#000' }} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
        />
      </View>
    </SafeAreaView>
  )
}

export default List