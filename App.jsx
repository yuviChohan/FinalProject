import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; // Import necessary components from react-native
import Display from './src/components/Display';
import Keypad from './src/components/Keypad';
import styles from './src/styles/styles';

const SimpleCalculator = () => {
  const [input, setInput] = useState(''); // Define input state

  // Handle input
  const handleInput = (inputValue) => {
    // Get the last character of the input
    const lastInput = input.slice(-1);
    // Checking if the last input is an operation symbol
    const isLastInputOperation = ['+', '-', '*', '/', '0'].includes(lastInput);
    const isCurrentInputOperation = ['+', '-', '*', '/'].includes(inputValue);

    if (isLastInputOperation && isCurrentInputOperation) {
      setInput(input.slice(0, -1) + inputValue);
    } else {
      setInput(input + inputValue);
    }
  };

  // Calculate the result
  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Clear the input
  const clear = () => {
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>
      <Display input={input} />
      <Keypad onInput={handleInput} onCalculate={calculate} onClear={clear} />
      <TouchableOpacity style={styles.button} onPress={goToHomeScreen}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SimpleCalculator;
