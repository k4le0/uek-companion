import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    overflowY: 'scroll',
  },
  titleStyle: {
    background: '#fafafa',
    color: 'black'
  }
};

const tilesData = [
  {
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    title: 'Tasty burger',
    author: 'pashminu',
    featured: true,
  },
  {
    title: 'Camera',
    author: 'Danson67',
    featured: true,
  },
  {
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    title: 'Hats',
    author: 'Hans',
    featured: true,
  },
  {
    title: 'Honey',
    author: 'fancycravel',
    featured: true,
  },
  {
    title: 'Vegetables',
    author: 'jill111',
    featured: true,
  },
  {
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    featured: true,
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cols={1}
      cellHeight={30}
      padding={1}
      margin={5}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="black" /></IconButton>}
          actionPosition="right"
          titlePosition="top"
          style={styles.titleStyle}
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;