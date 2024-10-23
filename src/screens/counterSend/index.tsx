import React, {useState, useEffect} from 'react';
import type {RootState} from '../../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../../redux/slices/counter';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const CounterSend = () => {
  const [amount, setAmount] = useState('0');
  const [warning, setWarning] = useState<string | null>(null);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const incrementAmt = () => {
    dispatch(incrementByAmount(Number(amount)));
    setAmount('');
  };

  const validate = () => {
    const reg = /^\d+$/;
    if (reg.test(amount)) {
      incrementAmt();
    } else {
      setWarning('Enter any number');
      setTimeout(() => {
        setWarning(null);
      }, 1500);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
        <Button title="Reset" onPress={() => dispatch(reset())} color={'red'} />
      </View>
      <View style={styles.row}>
        <TextInput
          placeholder="Enter Amount"
          style={styles.textInput}
          placeholderTextColor={'gray'}
          value={amount}
          onChangeText={text => setAmount(text)}
          keyboardType="number-pad"
        />
        <Button title="Increment by Amount" onPress={validate} color={'blue'} />
      </View>
      {warning && (
        <View style={styles.warnCont}>
          <Image source={require('../../assets/images/warning.png')} style={styles.warn} />
          <Text style={styles.warning}>{warning}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CounterSend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  count: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 100,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'plum',
    padding: 10,
    width: '30%',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    marginTop: 50,
  },
  warning: {
    color: 'white',
  },
  warn: {
    width: 20,
    height: 20,
    marginLeft:10,
    borderRadius:50,
    backgroundColor:'white'
  },
  warnCont: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 200,
    width: '90%',
    backgroundColor: '#28282B',
    paddingVertical: 12,
    borderRadius:5,
  },
});
