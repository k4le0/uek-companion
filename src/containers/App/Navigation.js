import React, { Component } from 'react';
import { Link, matchPath } from 'react-router-dom';

import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const eventIcon = <FontIcon className="material-icons">event</FontIcon>;
const streamIcon = <FontIcon className="material-icons">dashboard</FontIcon>;
const discussionIcon = <FontIcon className="material-icons">chat</FontIcon>;
const scheduleIcon = <FontIcon className="material-icons">schedule</FontIcon>;
const profileIcon = <FontIcon className="material-icons">school</FontIcon>;

const questionIcon = <FontIcon className="material-icons">reply</FontIcon>;
const infoIcon = <FontIcon className="material-icons">info</FontIcon>;
const chatIcon = <FontIcon className="material-icons">question_answer</FontIcon>;
const attendenceIcon = <FontIcon className="material-icons">location_on</FontIcon>;
const pollsIcon = <FontIcon className="material-icons">pie_chart</FontIcon>;


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
    super(props);
    this.state = {
      navigationOption: 1,
      selectedIndex: props.index,
    };
  }

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    if (this.state.navigationOption == 1) {
      return (
        <Paper zDepth={1} style={styles.bottomNav}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Pytania"
              icon={questionIcon}
              onTouchTap={() => this.select(0)}
              style={styles.smallerTab}
              containerElement={<Link to="/questions" />}
            />
            <BottomNavigationItem
              label="Informacje"
              icon={infoIcon}
              onTouchTap={() => this.select(1)}
              style={styles.smallerTab}
              containerElement={<Link to="/info" />}
            />
            <BottomNavigationItem
              label="Czat"
              icon={chatIcon}
              onTouchTap={() => this.select(2)}
              style={styles.smallerTab}
              containerElement={<Link to="/chat" />}
            />
            <BottomNavigationItem
              label="Obecność"
              icon={attendenceIcon}
              onTouchTap={() => this.select(3)}
              style={styles.smallerTab}
              containerElement={<Link to="/attendence" />}
            />
            <BottomNavigationItem
              label="Ankiety"
              icon={pollsIcon}
              onTouchTap={() => this.select(4)}
              style={styles.smallerTab}
              containerElement={<Link to="/polls" />}
            />
          </BottomNavigation>
        </Paper>
      );
    } else {
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
              icon={discussionIcon}
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
}

export default Navigation;