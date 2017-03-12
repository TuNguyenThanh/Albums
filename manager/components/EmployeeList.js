import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import EmployeeItem from './EmployeeItem';
import { employeeFetchData } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetchData();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employees) {
    console.log(employees);
    return (
      <EmployeeItem employees={employees} />
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // return {
  //   employeesList: state.EmployeeList
  // };
  const employees = _.map(state.EmployeeList, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeeFetchData })(EmployeeList);
