import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';

import Wrapper from './Wrapper';
import UserName from './UserName';
import UserNumber from './UserNumber';

const styles = {
};

const ProfileCard = (props) => (
    <Wrapper>
        <Avatar size={92} src={props.image}/>
        <UserName>{props.username}</UserName>
        <UserNumber>{props.number}</UserNumber>
    </Wrapper>
);

export default ProfileCard;