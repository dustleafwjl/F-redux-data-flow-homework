import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Menu from './layout/Menu';
import Home from './views/Home';
import { menuOptions } from './utils';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Menu />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {/* {menuOptions.map(({ path, component }) => (
                <Route key={path} path={path}>
                  {component}
                </Route>
              ))} */}
              {this.props.userInfo.logged &&
                menuOptions.map(
                  ({ path, component, permissionCode }) =>
                    this.props.userInfo.permissions.includes(permissionCode) && (
                      <Route key={path} path={path}>
                        {component}
                      </Route>
                    )
                )}
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

export default connect(mapStateToProps)(App);
