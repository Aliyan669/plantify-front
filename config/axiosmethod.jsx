import React from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {BASE_URL} from '../config';
export default function AxiosMethod() {
  const [inputValue, setInputValue] = useState('');
  const [todoArray, setTodoArray] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // console.log(inputValue)
  console.log(BASE_URL);
  useEffect(() => {
    axios
      .get(`${BASE_URL}todo`)
      .then(response => {
        console.log(response.data);
        setTodoArray(response.data.data);
      })
      .catch(error => {
        console.log(error, 'error');
      });
  }, [refresh]);

  const AddTodo = () => {
    console.log('Click');

    const objToSend = {
      todo: inputValue,
    };
    axios
      .post(`${BASE_URL}todo`, objToSend)
      .then(res => {
        console.log(res, 'response');
        if (res.data.status) {
          // True Condition //
          setRefresh(!refresh);
          console.log(true);
        } else {
          // false Condition //
          console.log(false);
          console.log(res.data.message);
        }
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };

  const deleteTodo = id => {
    //  console.log(id,"id");

    axios.delete(`${BASE_URL}todo/${id}`).then(res => {
      if (res.data.status) {
        // true condition //
        console.log(res.data, 'true');
        setRefresh(!refresh);
      } else {
        // false condition //
        // console.log(res.data.message);
        console.log(res.data, 'false');
      }
    });
  };

  const EditTodo = id => {
    // var editValue = ("EnterValue")
    console.log(editValue, 'editValue');

    const objToSend = {
      todo: editValue,
      id: id,
    };
    axios.put(`${BASE_URL}todo/`, objToSend).then(res => {
      if (res.data.status) {
        // true condition //
        console.log(res.data, 'true');
        setRefresh(!refresh);
      } else {
        // false condition //
        // console.log(res.data.message);
        console.log(res.data.message);
        console.log(res.data, 'false');
      }
    });
  };
  return (
    <View style={{marginTop: 30}}>
      <TextInput
        onChangeText={e => setInputValue(e)}
        type="text"
        placeholder="Enter Todo ...."
        style={{width: 200, height: 40, borderWidth: 1}}
      />
      <TouchableOpacity
        onPress={AddTodo}
        style={{
          width: 100,
          height: 35,
          backgroundColor: 'grey',
          borderRadius: 5,
          marginLeft: 20,
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
      {todoArray.map((e, i) => {
        return (
          <Text>
            {e.todo}{' '}
            <TouchableOpacity
              onPress={() => EditTodo(e._id)}
              style={{
                width: 100,
                height: 35,
                backgroundColor: 'grey',
                borderRadius: 5,
                marginLeft: 20,
              }}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => deleteTodo(e._id)}
              style={{
                width: 100,
                height: 35,
                backgroundColor: 'grey',
                borderRadius: 5,
                marginLeft: 20,
              }}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </Text>
        );
      })}
    </View>
  );
}
