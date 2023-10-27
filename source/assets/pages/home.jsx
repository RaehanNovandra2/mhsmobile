import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    onPress,
    Alert,
  } from 'react-native';
  import React from 'react';
  
  const Home = ({navigation}) => {
    return (
      <View>
  
       <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 60,
          alignItems: 'center',
          backgroundColor: 'red',
          marginHorizontal: 16,
          marginTop: 16,
          padding: 16,
          borderRadius: 40,
        }}>
        <Image
          resizeMode="contain"
          style={{height: 40, width: 150}}
          source={require('../Images/smkmhs.png')}
        />
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: 'yellow',}}>
        </View>
            
      </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=> navigation.navigate ('Detail') }>
            <View style={{
              padding: 12,
              flex:1,
              marginTop:16
            }}>
            <View style={{
              height: 200, 
              backgroundColor: 'red',
              borderRadius:14,
            }}>
              <View>
              <Image resizeMode='contain' style={{height:200, width:188, borderRadius:14}}
            source={require('../Images/bargerayam.jpg')}/>
            
              </View>
            
            </View>
            
            <Text style={{fontWeight:'bold', color:'black'}}>Burger Ayam</Text>
            <Text style={{fontWeight:'bold', color:'red'}}>Rp.20.000</Text>
            </View>
            </TouchableOpacity>
            <View style={{
              padding: 12,
              flex:1,
              marginTop:16
            }}>
            <View style={{
              height: 200, 
              backgroundColor: 'red',
              borderRadius:14
            }}>
              <View>
                <Image resizeMode='contain' style={{height:200, width:195, borderRadius:14}}
                source={require('../Images/spageti.jpg')}/>
              </View>
            </View>
            <Text style={{fontWeight:'bold', color:'black'}}>Spaghetti</Text>
            <Text style={{fontWeight:'bold', color:'red'}}>Rp.15.000</Text>
            </View>
            
            </View>
              <View style={{flexDirection: 'row'}}>
            <View style={{
              padding: 12,
              flex:1,
              
            }}>
            <View style={{
              height: 200, 
              backgroundColor: 'red',
              borderRadius:14
            }}>
              <Image resizeMode='contain' style={{height:200, width:190, borderRadius:14}}
              source={require('../Images/tehoolong.jpg')}/>
            </View>
            <Text style={{fontWeight:'bold', color:'black'}}>Teh oolong</Text>
            <Text style={{fontWeight:'bold', color:'red'}}>Rp.5000</Text>
            </View>
            <View style={{
              padding: 12,
              flex:1,
            }}>
            <View style={{
              height: 200, 
              backgroundColor: 'red',
              borderRadius:14
            }}>
              <View>
                <Image resizeMode='contain' style={{height:200, width:190, borderRadius:14}}
                source={require('../Images/susu.jpg')}/>
              </View>
            </View>
            <Text style={{fontWeight:'bold', color:'black'}}>Susu</Text>
            <Text style={{fontWeight:'bold', color:'red'}}>Rp.10.000</Text>
            </View>
            
            </View>
      </View>
      
    
        
    );
  };
  
  export default Home;
  