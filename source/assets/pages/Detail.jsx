import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


const Detail = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        height:280,
        alignItems:'center',
        marginHorizontal:16,
        marginTop:96,
        borderRadius:4
        }}>
            <Image resizeMode='contain' style={{height:300, width:400, borderRadius:4}}
            source={require('../Images/bargerayam.jpg')}/>
        </View>
        <Text style={{marginTop:49, marginHorizontal:16}}>Terbuat dari daging ayam yang diolah menjadi daging
ayam yang diolah menjadi daging ayam yang menjadi
patty lalu dipanggang atau digoreng</Text>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate ('succes')}>
            <View style={{
                width:400,
                height:56,
                backgroundColor:'red',
                marginTop:200,
                marginHorizontal:16,
                borderRadius:12}}>
                    <Text style={{fontWeight:'bold', color:'white', padding:16, marginHorizontal:109}}>Konfirmasi Pesanan</Text>
                </View>
                </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default Detail