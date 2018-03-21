import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import EmployeesList from './containers/employees/list';
import EmployeesInspections from './containers/employees/inspections';
import SignIn from './containers/signin/signin';
import store, { history, persistor } from './store';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          >
          <ConnectedRouter history={history}>
            <div>
              <Switch>
                <Route exact path='/' component={EmployeesList} />
                <Route exact path='/inspections' component={EmployeesInspections} />
                <Route exact path='/signin' component={SignIn} />
              </Switch>
            </div>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
