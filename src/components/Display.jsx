import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles';


const Display = ({ input }) => {
  return (
    <View style={styles.display}>
      <Text>{input || "0"}</Text>
    </View>
  );
};


export default Display;
