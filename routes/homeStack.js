import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

export default function Navigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ 
          gestureEnabled: false,
          headerTintColor:'white',
          headerStyle:{
            backgroundColor:'coral', 
            height:80
          }
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{title:'Game Zone'}}
        />
        <Stack.Screen
          name='ReviewDetails'
          component={ReviewDetails}
          options={{title:'Review'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}