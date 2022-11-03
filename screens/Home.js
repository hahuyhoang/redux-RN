import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateEmail } from './redux/actions/updateAction'
import { SafeAreaView } from 'react-native-safe-area-context';

const CallAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "Data" })

    }, 2000);
  })
}
const getData = async (setData) => {
  let data = await CallAPI()
  setData(data)
}
const Home = ({ navigation }) => {
  const [value, setValue] = useState(1)
  const [data, setData] = useState({ data: null })
  const [text, onChangeText] = useState("")
  const info = useSelector((state) => state.personalInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('moi vao man hinh');
    getData(setData)
    console.log("infoddd", info);
    return () => {
      console.log('HUy man hinh');
    }
  }, [])

  useEffect(() => {
    console.log('data da lang nghe la: ', data);
  }, [data])
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl text-green-700">Home</Text>
        {/* <Text className="mt-5 text-2xl">{value}</Text> */}
        {/* <TouchableOpacity className="border p-5 rounded-lg" onPress={() => {
          let newValue = value + 1;
          setValue(newValue)
          console.log(value);
        }}>

          <Text>SCORE</Text>
        </TouchableOpacity> */}
        <Text>EMAIL:{info.email}</Text>
        <Text>SCORE:{info.score}</Text>
        <Text>ID:{info.id}</Text>
        <Text>ADDRESS:{info.address}</Text>
        <TextInput
          className="w-44 border mt-4"
          onChangeText={onChangeText}
          autoCapitalize='none'
          value={text}
        />
        <TouchableOpacity className="border h p-5 rounded-lg" onPress={() =>
          dispatch(updateEmail(text))
        }>

          <Text>CAP NHAT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home