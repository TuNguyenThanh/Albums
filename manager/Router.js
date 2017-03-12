import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 64 }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Login" />
    </Scene>
    <Scene key="main">
      <Scene
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
        key="employeeList"
        component={EmployeeList}
        title="Employee List"
      />
      <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create" />
      <Scene key="employeeEdit" component={EmployeeEdit} title="Employee Edit" />
    </Scene>
  </Router>
);

export default RouterComponent;
