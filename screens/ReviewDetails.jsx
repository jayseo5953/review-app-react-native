import React from 'react'
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native'
import {globalStyles, images} from '../styles/global';
import Card from '../shared/Card'
import FlatButton from '../shared/Button'


const ReviewDetails = ({navigation, route}) => {

  const item = route.params.item;
  const deleteReview = route.params.deleteReview
  const rating = item.rating

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>Title: {item.title}</Text>
        <Text>Details: {item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
      <View style={styles.deleteButton}>
        
        <FlatButton text='Delete' onPress={()=>{
          // deleteReview(item.key);
          // navigation.goBack();
          Alert.alert(
            'Please Confirm',
            'Are you sure you want to delete?',
            [
              // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Confirm', onPress: () => {
                deleteReview(item.key);
                navigation.goBack();
                console.log('OK Pressed')
              }},
            ],
            { cancelable: false }
          )
          }}/>
      </View>
     
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  container: {
    padding:24
  },
  rating: {
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee'
  },
  deleteButton:{
    marginTop:5,
    // width:80,
    alignSelf:"flex-end"
  }
})
