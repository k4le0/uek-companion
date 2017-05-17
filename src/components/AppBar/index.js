import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  appBarStyle: {
    position: 'fixed',
    backgroundColor: '#8D0126',
    textAlign: 'center'
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
        title="myUEK" 
        showMenuIconButton={false}
        style={styles.appBarStyle}
      />
    );
  }
};

export default AppBarNoMenu;