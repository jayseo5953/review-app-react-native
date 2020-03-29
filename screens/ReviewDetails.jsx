import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {globalStyles} from '../styles/global'

const ReviewDetails = () => {
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails</Text>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  container: {
    padding:24
  }
})
