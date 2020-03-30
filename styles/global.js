import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },
  title: {
    fontFamily:'nunito-bold',
    fontSize:24,
    color:'#333'
  },
  titleText: {
    fontFamily:'nunito-bold',
    fontSize:18,
    color:'#333',
    // borderWidth:2,
    // borderColor:'#bbb',
    // borderStyle: 'dotted',
    padding:5
  },
  paragraph: {
    marginVertical:8,
    lineHeight:20
  },
  input: {
    borderWidth:1,
    borderColor:'#ddd',
    padding:10,
    fontSize:17,
    borderRadius:6,
    color:'black'
    // marginBottom:10
  },
  errorText: {
    color:'crimson',
    fontWeight:'bold',
    marginLeft:5,
    marginBottom:20,
    // textAlign:'center'
  }
})

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png')
  }
}