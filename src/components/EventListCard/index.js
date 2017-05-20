import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Wrapper from './Wrapper'

const styles = {
    card: {
        margin: '4px 0',
    },
    overlay: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)',
    },
    button: {
        color: '#8D0126',
    },

};

const EventListCard = (props) => (
    <Card style={styles.card}>
        <Link to={`/event/${props.number}`}>
            <CardHeader
                title={props.host}
                avatar={props.hostIcon}
                subtitle={props.hostText}
            />
            <CardMedia
                overlay={<CardTitle title={props.title} subtitle={"Zainteresowanych: " + props.attend} />}
                overlayContentStyle={styles.overlay}
            >
                <img src={props.image} />
            </CardMedia>
        </Link>
        <Wrapper>
            <Link to={`/event/${props.number}`}>
                <CardTitle title={moment(props.date).format("DD MMMM")} subtitle={"godz. " + moment(props.date).format("HH:mm")} />
            </Link>
            <CardActions>
                <Link to={`/event/${props.number}/join`}>
                    <FlatButton label="Dołącz" style={styles.button} />
                </Link>
            </CardActions>
        </Wrapper>
    </Card>
);

export default EventListCard;