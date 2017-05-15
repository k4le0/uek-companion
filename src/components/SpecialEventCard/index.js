import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const SpecialEventCard = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Specjalny Event" subtitle="Liczba uczestników" />}
    >
      <img src="http://placehold.it/300x120" />
    </CardMedia>
  </Card>
);

export default SpecialEventCard;