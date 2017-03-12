import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    error: ''
  }

  onPressLoginButton() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.loginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.loginSuccess.bind(this))
          .catch((error) => {
            this.loginFail(error);
          });
      });
  }

  loginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  loginFail(error) {
    this.setState({
      error: error.message,
      loading: false
    });
  }

  renderButtonLogin() {
    if (this.state.loading) {
      return <Spinner size={'small'} />;
    }
    return (
      <Button onPress={() => this.onPressLoginButton()}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@gmail.com'
            lable={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            lable={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.error}>{this.state.error}</Text>
        <CardSection>
          {this.renderButtonLogin()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
};

export default LoginForm;
