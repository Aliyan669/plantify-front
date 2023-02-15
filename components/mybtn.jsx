import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

function myBtn(props) {
  const {label, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Text>{label}</Text>
      </TouchableOpacity>
    </>
  );
}
export default myBtn;
