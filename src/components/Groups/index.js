// import React from 'react';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//     overflowY: 'auto',
//    // color: 'grey',
//   },
// };

// const tilesData = [
//   {
//     img: 'http://placehold.it/200x203',
//     title: 'Kampus UEK',
//     author: '111111',
//   },
//   {
//     img: 'http://placehold.it/200x202',
//     title: 'KrZZ1012',
//     author: 'dr Przemysław Kowalski',
//   },
//   {
//     img: 'http://placehold.it/200x201',
//     title: 'KrZZ1013',
//     author: '333333',
//   },
//   {
//     img: 'http://placehold.it/200x200',
//     title: 'KrZZ1014',
//     author: '44444444',
//   },
 
// ];

// /**
//  * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
//  */
// const Groups = () => (
//   <div style={styles.root}>
//     <GridList
//       cellHeight={180}
//       style={styles.gridList}
//     >
//       <Subheader>Twoje Grupy i wydarzenia </Subheader>
//       {tilesData.map((tile) => (
//         <GridTile
//           key={tile.img}
//           title={tile.title}
//           subtitle={<span>by <b>{tile.author}</b></span>}
//           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//         >
//           <img src={tile.img} />
//         </GridTile>
//       ))}
//     </GridList>
//   </div>
// );

// export default Groups;

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
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: '#fafafa',
  },
};

const tilesData = [
  {
    img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="#fafafa" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;