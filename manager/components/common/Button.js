import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.input} onPress={onPress} >
    <Text style={styles.textStyle}>{children}</Text>
  </TouchableOpacity>
);

const styles = {
  input: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },

  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    color: '#007aff'
  }
};
export { Button };
