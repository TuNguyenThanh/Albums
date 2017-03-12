import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import ListLibrary from './components/ListLibrary';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header title={'HOME'} />
          <ListLibrary />
        </View>
      </Provider>
    );
  }
}

export default App;
