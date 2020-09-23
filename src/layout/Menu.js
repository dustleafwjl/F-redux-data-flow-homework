import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuOptions } from '../utils';
import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {this.props.userInfo.logged &&
            menuOptions.map(
              ({ name, path, permissionCode }) =>
                this.props.userInfo.permissions.includes(permissionCode) && (
                  <li className="nav-item" key={name}>
                    <Link to={path}>{name}</Link>
                  </li>
                )
            )}
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

export default connect(mapStateToProps)(Menu);
