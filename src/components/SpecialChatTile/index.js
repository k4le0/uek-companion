import React from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const styles = {
  card: {
    width: '100%',
    borderRadius: '3px',
  },

};

const SpecialChatTile = (props) => (
  <Card containerStyle={styles.card}>
    <CardMedia
      overlay={<CardTitle title="Specjalne wydarzenie" subtitle="Jakieś wyjątkowe wydarzenie" />}
    >
      <img src="http://placehold.it/360x216/8D0126/8D0126" />
    </CardMedia>
  </Card>
);

export default SpecialChatTile;