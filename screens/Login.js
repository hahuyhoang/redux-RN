import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = ({navigation}) => {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 justify-center items-center">
                <Text>
                    Login
                </Text>
                <TextInput className='border w-52 rounded-xl pl-6' placeholder='nhap email' />
                <TextInput className='border w-52 rounded-xl pl-6' placeholder='nhap passs' />

                <View>
                    <TouchableOpacity className="border mt-4 bg-green-500 rounded-lg" onPress={() => navigation.navigate('Home')}>
                        <Text className='text-white text-base'>Dang nhap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login