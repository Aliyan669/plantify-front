import React from 'react';
import {TextInput} from 'react-native';
import styles from '../screens/styling';

function myInput(props) {
  const {label, onChangeText} = props;
  return (
    <>
      <TextInput placeholder={label} onChangeText={onChangeText} />
    </>
  );
}
export default myInput;
