import React from 'react';
import { Link } from 'react-router-dom';

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
    showMenuIconButton: false,
    title: '',
    zDepth: 1,
  };

  changeHeaderState() {
    this.props.change(false)
  }

  render() {
    let leftIcon = null;
    let rightIcon = null;
    if (this.props.option) {
      leftIcon = <Link to={"/discussion"} onClick={this.changeHeaderState.bind(this)}><IconButton><FontIcon color={white} className="material-icons">keyboard_arrow_left</FontIcon></IconButton></Link>;
    }
    console.log(leftIcon);
    return (
      <AppBar
        title={this.props.title}
        showMenuIconButton={this.props.option ? true : false}
        style={styles.appBarStyle}
        iconElementLeft={leftIcon}
      />
    );
  }
};

export default Header;