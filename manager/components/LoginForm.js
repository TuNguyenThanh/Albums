import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { changedEmail, changedPassword, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onChangeEmail(text) {
    this.props.changedEmail(text);
  }

  onChangePassword(text) {
    this.props.changedPassword(text);
  }

  onPressLogin() {
    const { email, pass } = this.props;
    this.props.loginUser({ email, pass });
  }

  renderButtonLogin() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this.onPressLogin.bind(this)}>Login</Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            lable={'Username'}
            placeholder={'username'}
            onChangeText={this.onChangeEmail.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            lable={'Password'}
            placeholder={'password'}
            secureTextEntry
            onChangeText={this.onChangePassword.bind(this)}
            value={this.props.pass}
          />
        </CardSection>
        <Text style={styles.error}>{this.props.error}</Text>
        <CardSection>
          {this.renderButtonLogin()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center'
  }
};

const mapStateToProps = (state) => {
  return {
    email: state.Auth.email,
    pass: state.Auth.password,
    error: state.Auth.error,
    loading: state.Auth.loading,
  };
};

export default connect(mapStateToProps, { changedEmail, changedPassword, loginUser })(LoginForm);
