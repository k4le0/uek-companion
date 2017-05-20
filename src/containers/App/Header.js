import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import { white } from 'material-ui/styles/colors';

const styles = {
  appBarStyle: {
    position: 'fixed',
    backgroundColor: '#8D0126',
    textAlign: 'center'
  },
};

class Header extends React.Component {
  static defaultProps = {
    zDepth: 1,
  };

  render() {

    console.log()
    let leftIcon = null;
    let rightIcon = null;
    if (this.props.chat.chatVisible) {
      leftIcon = <Link to={"/discussion"} onClick={() => this.props.changeVisible(false)}><IconButton><FontIcon color={white} className="material-icons">keyboard_arrow_left</FontIcon></IconButton></Link>;
    }
    return (
      <AppBar
        title={this.props.title}
        showMenuIconButton={this.props.chat.chatVisible ? true : false}
        style={styles.appBarStyle}
        iconElementLeft={leftIcon}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    chat: state.chatReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeVisible: (value) => {
      dispatch({
        type: "CHANGE",
        payload: value
      })
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);