// import React, {useState} from 'react';
// import type {RootState} from '../../redux/store';
// import {useSelector, useDispatch} from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
// } from '../../redux/slices/counter';
// import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

// const CounterSend = () => {
//   const [amount, setAmount] = useState(5);
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch();
//   console.log(typeof(amount));
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Increment"
//         onPress={() => dispatch(increment())}
//         color={'white'}
//       />
//       <Button
//         title="Decrement"
//         onPress={() => dispatch(decrement())}
//         color={'white'}
//       />
//       <TextInput
//         placeholder="Enter Amount"
//         style={styles.textInput}
//         placeholderTextColor={'white'}
//         value={amount}
//         onChangeText={text => setAmount(text)}
//         keyboardType='number-pad'
//       />
//       <Button
//         title="incrementByAmount"
//         onPress={() => dispatch(incrementByAmount(amount))}
//         color={'white'}
//       />

//       <Text style={styles.count}>Count: {count}</Text>
//     </View>
//   );
// };

// export default CounterSend;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//   },
//   count: {
//     fontSize: 20,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: 'white',
//     padding: 10,
//     minWidth: '50%',
//   },
// });


import React, { useState } from 'react';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  reset
} from '../../redux/slices/counter';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const CounterSend = () => {
  const [amount, setAmount] = useState('0'); 
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const incrementAmt = () => [dispatch(incrementByAmount(Number(amount))),setAmount('')]
  const validate = ()=>{
    const reg = /^\d+$/;
    console.log(reg.test(amount));
    if(reg.test(amount)){
        incrementAmt();
    }
    else{
        Alert.alert("Enter any number");
    }
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.count}>Count: {count}</Text>
        <View style={styles.row}>
      <Button
        title="Increment(+)"
        onPress={() => dispatch(increment())}
        color={'red'}
      />
      <Button
        title="Decrement(-)"
        onPress={() => dispatch(decrement())}
        color={'red'}
      />
       <Button
        title="Reset"
        onPress={() => dispatch(reset())}
        color={'red'}
      />
      </View>
      <View style={styles.row}>
      <TextInput
        placeholder="Enter Amount"
        style={styles.textInput}
        placeholderTextColor={'gray'}
        value={amount}
        onChangeText={text => setAmount(text)}
        keyboardType='number-pad'
      />
     <Button
        title="Increment by Amount"
        onPress={validate}
        color={'blue'}
      />
      </View>
     
      
    </View>
  );
};

export default CounterSend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  count: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'plum',
    padding: 10,
    width:'30%'
  },
  row:{
    flexDirection:'row',
    marginTop:50,
  }
});
