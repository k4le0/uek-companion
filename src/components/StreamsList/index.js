import React from 'react';

import { GridList } from 'material-ui/GridList';

const styles = {
  gridList: {
    width: '100%',
  },
};

const StreamsList = (props) => (
  <GridList
    cols={2}
    cellHeight={216}
    padding={8}
    style={styles.gridList}
  >
    {props.children}
  </GridList>
);

export default StreamsList;