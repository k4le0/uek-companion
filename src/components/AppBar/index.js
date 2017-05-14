import React from 'react';
// require('./index.css');

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  appBarStyle: {
    backgroundColor: '#8D0126',
  },

};

class AppBarNoMenu extends AppBar {

  static defaultProps = {
    showMenuIconButton: false,
    title: '',
    zDepth: 1,
  };

  render() {
    return (
      <AppBar
        title="Title" 
        showMenuIconButton={false}
        style={styles.appBarStyle}
      />
    );
  }
};

export default AppBarNoMenu;

