// Import all required modules
import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import BottomNavigationItem from '../../components/BottomNavigationItem';

export default class App extends React.Component {
  render() {
    return (
      <BottomNavigation>
        <BottomNavigationItem label={"Wydarzenia"} />
        <BottomNavigationItem label={"Stream"} />
        <BottomNavigationItem label={"Dyskusje"} />
        <BottomNavigationItem label={"Harmonogram"} />
        <BottomNavigationItem label={"Profil"} />
      </BottomNavigation>
    );
  }
}