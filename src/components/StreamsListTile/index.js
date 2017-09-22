import React from 'react';

import { GridTile } from 'material-ui/GridList';

const styles = {
    tileStyle: {
        borderRadius: '3px'
    },
    title: {
        fontSize: "20px"
    }
};

const StreamsListTile = (props) => (
    <GridTile
        style={styles.tileStyle}
        title={props.title}
        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        titlePosition="bottom"
        titleStyle={styles.title}
        cols={2}
        rows={2}>
        <img src={props.image} />
    </GridTile>
);

export default StreamsListTile;