import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Router from './Router';//143video

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAZSRYLbsWN0znZBdziDIyuaVlousiWjU0',
      authDomain: 'reactnative-cf13d.firebaseapp.com',
      databaseURL: 'https://reactnative-cf13d.firebaseio.com',
      storageBucket: 'reactnative-cf13d.appspot.com',
      messagingSenderId: '771737054483'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
