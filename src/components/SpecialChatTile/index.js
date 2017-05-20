import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Specjalne wydarzenie" subtitle="Jakieś wyjątkowe wydarzenie" />}
    >
      <img src="http://www.material-ui.com/images/nature-600-337.jpg" />
    </CardMedia>
  </Card>
);

export default CardExampleWithAvatar;