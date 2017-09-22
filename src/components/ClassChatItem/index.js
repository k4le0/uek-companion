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

const ClassChatItem = (props) => (
    <ListItem
        primaryText={props.title}
        secondaryText={props.subtitle}
        leftAvatar={<Avatar size={40} src={props.image}/>}
    />
);

export default ClassChatItem;