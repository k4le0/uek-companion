import React, { Component } from 'react';
import { Link, matchPath } from 'react-router-dom';

import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const eventIcon = <FontIcon className="material-icons">event</FontIcon>;
const streamIcon = <FontIcon className="material-icons">dashboard</FontIcon>;
const chatIcon = <FontIcon className="material-icons">chat</FontIcon>;
const scheduleIcon = <FontIcon className="material-icons">schedule</FontIcon>;
const profileIcon = <FontIcon className="material-icons">school</FontIcon>;

const styles = {
  bottomNav: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  },
  smallerTab: {
    minWidth: '64px',
    textAlign: 'center',
  },
};

class Navigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navigationOption: props.option,
      selectedIndex: props.index,
    };
  }

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
            containerElement={<Link to="/event" />}
          />
          <BottomNavigationItem
            label="Stream"
            icon={streamIcon}
            onTouchTap={() => this.select(1)}
            style={styles.smallerTab}
            containerElement={<Link to="/stream" />}
          />
          <BottomNavigationItem
            label="Dyskusje"
            icon={chatIcon}
            onTouchTap={() => this.select(2)}
            style={styles.smallerTab}
            containerElement={<Link to="/discussion" />}
          />
          <BottomNavigationItem
            label="Plan"
            icon={scheduleIcon}
            onTouchTap={() => this.select(3)}
            style={styles.smallerTab}
            containerElement={<Link to="/schedule" />}
          />
          <BottomNavigationItem
            label="Profil"
            icon={profileIcon}
            onTouchTap={() => this.select(4)}
            style={styles.smallerTab}
            containerElement={<Link to="/profile" />}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Navigation;