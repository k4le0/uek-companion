import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    img: '../../images/grid-list/coffe.jpg',
    title: 'KrZZ1011',
    author: 'jill111',
  },
  {
    img: '../../images/grid-list/coffe.jpg',
    title: 'KrZZ1012',
    author: 'pashminu',
  },
  {
    img: '../../images/grid-list/coffe.jpg',
    title: 'KrZZ1013',
    author: 'Danson67',
  },
  {
    img: '../../images/grid-list/coffe.jpg',
    title: 'KrZZ1014',
    author: 'fancycrave1',
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
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Groups;