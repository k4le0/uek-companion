import React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import FontIcon from "material-ui/FontIcon";
import Paper from "material-ui/Paper";
import {BottomNavigation, BottomNavigationItem} from "material-ui/BottomNavigation";

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
        zIndex: 100
    },
    smallerTab: {
        minWidth: '64px',
        textAlign: 'center',
    },
};

class Navigation extends React.Component {
    getCurrentIndex = (path) => {
        if (path.includes('/discussion')) return 0;
        if (path.includes('/event')) return 1;
        if (path.includes('/stream')) return 2;
        if (path.includes('/schedule')) return 3;
        if (path.includes('/profile')) return 4;
    };

    componentDidMount() {
        const index = this.getCurrentIndex(this.props.location.pathname);
        this.props.setSelected(index);
    };

    render() {
        if (this.props.chat.chatVisible || this.props.location.pathname.startsWith('/discussion/')) {
            return (
                <Paper zDepth={1} style={styles.bottomNav}>
                    <BottomNavigation selectedIndex={this.props.chat.selectedIndex}>
                        <BottomNavigationItem
                            label="Czat"
                            icon={chatIcon}
                            onTouchTap={() => this.props.setSelected(0)}
                            style={styles.smallerTab}
                            containerElement={<Link to='chat'/>}
                        />
                        <BottomNavigationItem
                            label="Pytania"
                            icon={questionIcon}
                            onTouchTap={() => this.props.setSelected(1)}
                            style={styles.smallerTab}
                            containerElement={<Link to="questions"/>}
                        />
                        <BottomNavigationItem
                            label="Informacje"
                            icon={infoIcon}
                            onTouchTap={() => this.props.setSelected(2)}
                            style={styles.smallerTab}
                            containerElement={<Link to="information"/>}
                        />
                        <BottomNavigationItem
                            label="Obecność"
                            icon={attendenceIcon}
                            onTouchTap={() => this.props.setSelected(3)}
                            style={styles.smallerTab}
                            containerElement={<Link to="attendance"/>}
                        />
                        <BottomNavigationItem
                            label="Ankiety"
                            icon={pollsIcon}
                            onTouchTap={() => this.props.setSelected(4)}
                            style={styles.smallerTab}
                            containerElement={<Link to="polls"/>}
                        />
                    </BottomNavigation>
                </Paper>
            );
        } else {
            return (
                <Paper zDepth={1} style={styles.bottomNav}>
                    <BottomNavigation selectedIndex={this.props.chat.selectedIndex}>
                        <BottomNavigationItem
                            label="Dyskusje"
                            icon={discussionIcon}
                            onTouchTap={() => this.props.setSelected(0)}
                            style={styles.smallerTab}
                            containerElement={<Link to="/discussion"/>}
                        />
                        <BottomNavigationItem
                            label="Wydarzenia"
                            icon={eventIcon}
                            onTouchTap={() => this.props.setSelected(1)}
                            style={styles.smallerTab}
                            containerElement={<Link to="/event"/>}
                        />
                        <BottomNavigationItem
                            label="Stream"
                            icon={streamIcon}
                            onTouchTap={() => this.props.setSelected(2)}
                            style={styles.smallerTab}
                            containerElement={<Link to="/stream"/>}
                        />
                        <BottomNavigationItem
                            label="Plan"
                            icon={scheduleIcon}
                            onTouchTap={() => this.props.setSelected(3)}
                            style={styles.smallerTab}
                            containerElement={<Link to="/schedule"/>}
                        />
                        <BottomNavigationItem
                            label="Profil"
                            icon={profileIcon}
                            onTouchTap={() => this.props.setSelected(4)}
                            style={styles.smallerTab}
                            containerElement={<Link to="/profile"/>}
                        />
                    </BottomNavigation>
                </Paper>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        chat: state.chatReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelected: (value) => {
            dispatch({
                type: "SELECT",
                payload: value
            })
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
