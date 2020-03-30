import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import HomeScreen from './homeStack';
import AboutScreen from './aboutStack'

import Header from '../shared/Header'

const Drawer = createDrawerNavigator();

export default function RootNavigator () {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{title:'GameZone'}}/>
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}