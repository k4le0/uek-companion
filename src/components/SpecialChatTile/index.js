import React from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const styles = {
  card: {
    marginBottom: '8px',
  }
};

const SpecialChatTile = (props) => (
  <Card style={styles.card}>
    <CardMedia
      overlay={<CardTitle title={props.title} subtitle={props.subtitle} />}>
      <img src={props.image} />
    </CardMedia>
  </Card>
);

export default SpecialChatTile;