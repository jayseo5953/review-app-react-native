import React from "react";
import { StyleSheet, Button, View, Text, TextInput} from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from '../shared/Button'

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5','Rating must be a number 1 - 5',(value)=> parseInt(value) < 6 && parseInt(value) > 0
    )
})

const ReviewForm = (props) => {
  return (
    <View style={globalStyles.container}>
     
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          props.onSubmit(values);
          actions.resetForm();
        }}
      >
        {props => (
          <View>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              multiline height={100}
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review 1-5"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

            <FlatButton text='submit' onPress={props.handleSubmit}/>
          </View>
     
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({

});
