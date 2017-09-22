import React from 'react';
import truncate from 'truncate';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const styles = {
    memberCountAvatar: {
        display: "flex",
        fontSize: "10px", 
        color: "white"
    }
};

const GroupListItem = (props) => (
    <ListItem
        primaryText={props.groupName}
        leftAvatar={<Avatar size={40} src={props.image}/>}
        rightIcon={<Avatar size={24} style={styles.memberCountAvatar}>{props.membersCount}</Avatar>}
    />
);

export default GroupListItem;