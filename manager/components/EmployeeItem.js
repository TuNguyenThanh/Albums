import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class EmployeeItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employeeToEdit: this.props.employees });
  }

  render() {
    const { name } = this.props.employees;
    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
      >
        <View>
          <Card>
            <CardSection>
              <Text>{_.startCase(name)}</Text>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default EmployeeItem;
