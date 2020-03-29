import React, {useState} from 'react';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails'
import {AppLoading}  from 'expo'

import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

export default function App () {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
      />
    )
  }
  
}
