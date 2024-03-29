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
import Home from './source/assets/pages/home';
import Detail from './source/assets/pages/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    
  
      
  );
};

export default App;
