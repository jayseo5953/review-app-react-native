import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';
import { MaterialIcons } from '@expo/vector-icons';
import {TouchableOpacity, Text} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const HomeStack = createStackNavigator();

export default function HomeScreen ({navigation}) {
  return (
      <HomeStack.Navigator
        initialRouteName='Home'
        screenOptions={{ 
          gestureEnabled: false,
          headerTintColor:'#333',
          headerStyle:{
            backgroundColor:'#eee', 
            height:80
          },
          headerTitleAlign: "center" 
        }}
      >
        <HomeStack.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: ()=> <Header navigation={navigation} title={'Game Zone'}/>,
          // headerLeft: () => (
          //   <TouchableOpacity>
          //    <MaterialIcons name="menu" size={25} backgroundColor='#eee' color='#333' style={{marginLeft:5}} onPress={()=>navigation.openDrawer()}/>
          //   </TouchableOpacity>
          // )
        }}
        />
        <HomeStack.Screen
          name='ReviewDetails'
          component={ReviewDetails}
          options={{title:'Review'}}
        />
      </HomeStack.Navigator>
  )
}