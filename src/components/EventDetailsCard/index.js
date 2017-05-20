import React from 'react';

import moment from 'moment';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import Wrapper from './Wrapper';

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
    left: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }
};

const EventDetailsCard = (props) => (
    <Card style={styles.card}>
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
        <Wrapper>
            <CardTitle title={moment(props.date).format("DD MMMM")} subtitle={"godz. " + moment(props.date).format("HH:mm")} />
            <CardActions style={styles.left}>
                <FlatButton label="Dołącz" style={styles.button} />
            </CardActions>
        </Wrapper>
        <Divider />
        <Subheader>Opis wydarzenia</Subheader>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <Divider />
        <Subheader>Komentarze:</Subheader>
    </Card>
);

export default EventDetailsCard;