import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
   // color: 'grey',
  },
};

const tilesData = [
  {
    img: 'http://placehold.it/200x203',
    title: 'Kampus UEK',
    author: '111111',
  },
  {
    img: 'http://placehold.it/200x202',
    title: 'KrZZ1012',
    author: 'dr Przemysław Kowalski',
  },
  {
    img: 'http://placehold.it/200x201',
    title: 'KrZZ1013',
    author: '333333',
  },
  {
    img: 'http://placehold.it/200x200',
    title: 'KrZZ1014',
    author: '44444444',
  },
 
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Groups = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Twoje Grupy i wydarzenia </Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          containerElement={<Link to="/chat"/>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Groups;