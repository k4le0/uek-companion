import React from 'react';

import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const styles = {
    card: {
        margin: '4px 0',
    },
    overlay: {
        background: 'rgba(0, 0, 0, 0)',
    },
    button: {
        color: '#8D0126',
    },

};

const EventDetailsCard = (props) => (
    <Card style={styles.card}>
        <CardMedia>
            <img src={props.image} />
        </CardMedia>
        <CardTitle title={props.title} subtitle={"Idzie: " + props.attend} />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Dołącz" style={styles.button} />
        </CardActions>
    </Card>
);

export default EventDetailsCard;