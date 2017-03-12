import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAZSRYLbsWN0znZBdziDIyuaVlousiWjU0',
      authDomain: 'reactnative-cf13d.firebaseapp.com',
      databaseURL: 'https://reactnative-cf13d.firebaseio.com',
      storageBucket: 'reactnative-cf13d.appspot.com',
      messagingSenderId: '771737054483'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:  //login
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()} >log out</Button>
          </CardSection>
        );
      case false: // not login
        return <LoginForm />;
      default:
        return <Spinner size={'large'} />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={'HOME'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
