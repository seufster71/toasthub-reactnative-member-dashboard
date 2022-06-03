import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


export default function DashboardView({itemState, fields, texts, labels, onChangeLogin,
  onChangeRegistration, fieldChangeEvent, onForgotPassword,
  fieldBlurEvent, buttonClick, handleChange, changeView }) {

	

    return (
      <View><Text> Dashboard Page </Text></View>
    );
}


DashboardView.propTypes = {
  itemState: PropTypes.object,
	fields: PropTypes.object,
  texts: PropTypes.object,
  labels: PropTypes.object,
  onChangeLogin: PropTypes.func,
  onChangeRegistration: PropTypes.func,
  onForgotPassword: PropTypes.func,
  fieldChangeEvent: PropTypes.func,
  fieldBlurEvent: PropTypes.func,
  buttonClick: PropTypes.func,
  handleChange: PropTypes.func,
  changeView: PropTypes.func
};
