import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const eventIcon = <FontIcon className="material-icons">event</FontIcon>;
const streamIcon = <FontIcon className="material-icons">dashboard</FontIcon>;
const chatIcon = <FontIcon className="material-icons">chat</FontIcon>;
const scheduleIcon = <FontIcon className="material-icons">schedule</FontIcon>;
const profileIcon = <FontIcon className="material-icons">school</FontIcon>;

const styles = {
  bottomNav: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
  },
  smallerTab: {
    minWidth: '80px',
  },
};

class BottomNavigationExample extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    return (
      <Paper zDepth={1} style={styles.bottomNav}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Wydarzenia"
            icon={eventIcon}
            onTouchTap={() => this.select(0)}
            style={styles.smallerTab}
          />
          <BottomNavigationItem
            label="Stream"
            icon={streamIcon}
            onTouchTap={() => this.select(1)}
            style={styles.smallerTab}
          />
          <BottomNavigationItem
            label="Dyskusje"
            icon={chatIcon}
            onTouchTap={() => this.select(2)}
            style={styles.smallerTab}
          />
          <BottomNavigationItem
            label="Plan"
            icon={scheduleIcon}
            onTouchTap={() => this.select(3)}
            style={styles.smallerTab}
          />
          <BottomNavigationItem
            label="Profil"
            icon={profileIcon}
            onTouchTap={() => this.select(4)}
            style={styles.smallerTab}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExample;