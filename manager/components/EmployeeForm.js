import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            lable="Name"
            placeholder="Tu Nguyen"
            value={this.props.name}
            onChangeText={(text) => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            lable="Phone"
            placeholder="+84903016975"
            value={this.props.phone}
            onChangeText={(text) => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'row' }}>
          <Text style={styles.shift}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={(day) => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Webnesday" value="Webnesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  shiftText: {
    color: 'red',
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm;
  return {
    name, phone, shift
  };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
