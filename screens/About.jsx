import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {globalStyles} from '../styles/global'
import Card from '../shared/Card'

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={{fontWeight:'bold'}}>About: </Text>
      <Card>
        <Text>
          The Legend of Zelda is an action-adventure video game franchise created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka.
        </Text>
      </Card>
    </View>
  )
}

export default About
