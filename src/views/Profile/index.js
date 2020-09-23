import React, { Component } from 'react';
import { connect } from 'react-redux';
class Profile extends Component {
  render() {
    const { name, id, avatar } = this.props.userInfo;
    return (
      <div className="main-view profile">
        <h2>个人信息</h2>
        <ul>
          <li>用户名：{name}</li>
          <li>用户id：{id}</li>
          <li>用户头像：</li>
          <img src={avatar} alt="头像" />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

export default connect(mapStateToProps)(Profile);
