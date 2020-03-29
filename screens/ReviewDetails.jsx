import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {globalStyles} from '../styles/global'

const ReviewDetails = ({navigation, route}) => {
  const pressHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <Text>Title: {route.params.title}</Text>
      <Text>Details: {route.params.body}</Text>
      <Text>Rating: {route.params.rating}</Text>
      {/* <Button title={'back to home'} onPress={pressHandler}/> */}
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  container: {
    padding:24
  }
})
