import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ lable, value, onChangeText, placeholder, secureTextEntry }) => (
  <View style={styles.container}>
    <Text style={styles.inputText}>{lable}</Text>
    <TextInput
      autoCapitalize={'none'}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      placeholder={placeholder}
    />
  </View>
);

const styles = {
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },

  inputText: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 18
  },

  input: {
    flex: 2,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000',
    fontSize: 18,
    lineHeight: 23
  }
};

export { Input };
