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
  }
})