import React, { Component } from 'react';
import * as Communications from 'react-native-communications';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeeUpdate, employeeSaveChange, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  }

  componentWillMount() {
    _.each(this.props.employeeToEdit, (value, key) => {
      this.props.employeeUpdate({ prop: key, value });
    });
  }

  onPressSave() {
    const { name, phone, shift } = this.props;
    //console.log(name, phone, shift);
    this.props.employeeSaveChange({ name, phone, shift, uid: this.props.employeeToEdit.uid });
  }

  onPressText() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Hello, ${shift}`);
  }

  onAccept() {
    this.props.employeeDelete({ uid: this.props.employeeToEdit.uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onPressSave.bind(this)}>Save</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onPressText.bind(this)}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this ?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm;
  return {
    name, phone, shift
  };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSaveChange, employeeDelete })(EmployeeEdit);
