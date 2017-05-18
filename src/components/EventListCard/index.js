import React from 'react';
import truncate from 'truncate';
import { Link } from 'react-router-dom';

import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import BottomWrapper from './BottomWrapper'

const styles = {
    card: {
        margin: '4px 0',
    },
    overlay: {
        background: 'rgba(0, 0, 0, 0)',
    },
    button:{
        color: '#8D0126',
    },

};

const EventListCard = (props) => (
    <Card style={styles.card}>
        <Link to={`/event/${props.number}`}>
            <CardMedia>
                <img src={props.image} />
            </CardMedia>
        </Link>
        <BottomWrapper>
            <Link to={`/event/${props.number}`}>
                <CardTitle title={truncate(props.title, 11)} subtitle={"Idzie: " + props.attend} />
            </Link>
            <CardActions>
                <Link to={`/event/${props.number}/join`}>
                    <FlatButton label="Dołącz" style={styles.button}/>
                </Link>
            </CardActions>
        </BottomWrapper>
    </Card>
);

export default EventListCard;