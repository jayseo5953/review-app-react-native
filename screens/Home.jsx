import React,{useState} from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/global'



const Home = ({navigation, route}) => {
  const pressHandler = () => {
    
  }
  
  const [reviews, setReviews] = useState([
    {title: 'Zelda: Breath of the Wild', rating: 5, body: 'babo mong tong', key:'1'},
    {title: 'Gotta Catch All', rating: 3, body: 'Pikachu~~!!!', key:'2'},
    {title: 'Super Mario Bros', rating: 4, body: 'its a me!', key:'3'},
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>List of Games</Text>
      <Text></Text>
      <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity style={globalStyles.titleText} onPress={()=>navigation.push('ReviewDetails', item )}>
            <Text style={globalStyles.titleText}>
              {item.title}
            </Text>
          </TouchableOpacity>

        )}
      />
    </View>
  )
}

export default Home