import React,{useState} from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard  } from 'react-native'
import {globalStyles} from '../styles/global'
import Card from '../shared/Card'
import debounce from'lodash.debounce';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm'


const Home = ({navigation, route}) => {
  
  const [reviews, setReviews] = useState([
    {title: 'Zelda: Breath of the Wild', rating: 5, body: 'babo mong tong', key:'1'},
    {title: 'Gotta Catch All', rating: 3, body: 'Pikachu~~!!!', key:'2'},
    {title: 'Super Mario Bros', rating: 4, body: 'its a me!', key:'3'},
  ]);

  const [openModal, setOpenModal] = useState(false);

  const submitHandler = (values) => {
    setReviews([
      ...reviews,
      {...values,key: Math.random().toString()}
    ]);
    setOpenModal(!openModal);
  }

  const deleteReview = (key) => {
    const newState=[...reviews]
    for(let i=0; i < newState.length; i++) {
      if(newState[i].key === key) {
        newState.splice(i,1);
      }
    }
    setReviews(newState)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={openModal}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TouchableOpacity style={{...styles.modalToggle, ...styles.modalClose,...styles.button}} onPress={()=>setOpenModal(!openModal)}>
              <MaterialIcons 
                name='close'
                size={24}
              />
            </TouchableOpacity>
          </View>
          </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <ReviewForm onSubmit={submitHandler}/>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={()=>setOpenModal(!openModal)}>
        <MaterialIcons 
          name='add'
          size={24}
          style={styles.modalToggle}
        />
      </TouchableOpacity>
      
      <Text></Text>
      <Text style={globalStyles.title}>List of Games</Text>
      <Text></Text>
      <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity style={globalStyles.titleText} onPress={debounce(
            () =>
            navigation.push('ReviewDetails', {item, deleteReview}), 500,{
              'leading': true,
              'trailing': false
            }
          )}>
            <Card>
              <Text style={globalStyles.titleText}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home

const styles= {
  modalContent: {
    flex:1
  },
  modalToggle: {
    // marginBottom:10,
    // borderWidth:1,
    // borderColor: '#f2f2f2',
    margin:4,
    padding:10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop:30,
    marginBottom:0
  },
  button:{
    borderRadius:6,
    elevation:3,
    backgroundColor:'#fff',
    shadowOffset: {
      width:1,
      height:1
    },
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
    // padding:5
  }
}