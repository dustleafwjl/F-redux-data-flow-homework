import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserInfo, clearUserInfo } from '../actions';
import './Header.scss';

class Header extends Component {
  handleSignIn = () => {
    fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
      .then(res => res.json())
      .then(data => {
        this.props.dispatchSetUserInfo({ ...data, logged: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSignOut = () => {
    this.props.dispatchClearUserInfo();
  };
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.userInfo.logged && (
            <>
              <img src={this.props.userInfo.avatar} alt="头像" />
              <span className="username">{this.props.userInfo.name}</span>
            </>
          )}
          {this.props.userInfo.logged ? (
            <a className="sign" onClick={this.handleSignOut}>
              Sign out
            </a>
          ) : (
            <a className="sign" onClick={this.handleSignIn}>
              Sign in
            </a>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ userInfo }) => {
  return {
    userInfo
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchSetUserInfo(info) {
    dispatch(setUserInfo(info));
  },
  dispatchClearUserInfo() {
    dispatch(clearUserInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
