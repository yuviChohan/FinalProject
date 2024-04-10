import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles';


const Keypad = ({ onInput, onCalculate, onClear }) => {
  return (
    <View style={styles.keypad}>
      <TouchableOpacity style={styles.button} onPress={onClear}>
        <Text>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onInput('/')}>
        <Text>&divide;</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onInput('*')}>
        <Text>&times;</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onInput('-')}>
        <Text>&minus;</Text>
      </TouchableOpacity>
      {['9', '8', '7'].map((digit) => (
        <TouchableOpacity key={digit} style={styles.button} onPress={() => onInput(digit)}>
          <Text>{digit}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => onInput('+')}>
        <Text>+</Text>
      </TouchableOpacity>
      {['6', '5', '4'].map((digit) => (
        <TouchableOpacity key={digit} style={styles.button} onPress={() => onInput(digit)}>
          <Text>{digit}</Text>
        </TouchableOpacity>
      ))}
      {['3', '2', '1'].map((digit) => (
        <TouchableOpacity key={digit} style={styles.button} onPress={() => onInput(digit)}>
          <Text>{digit}</Text>
        </TouchableOpacity>
      ))}
      {['0'].map((digit) => (
        <TouchableOpacity key={digit} style={[styles.button, styles.zero]} onPress={() => onInput(digit)}>
          <Text>{digit}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={onCalculate}>
        <Text>=</Text>
      </TouchableOpacity>
      {['.'].map((digit) => (
        <TouchableOpacity key={digit} style={styles.button} onPress={() => onInput(digit)}>
          <Text>{digit}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default Keypad;
