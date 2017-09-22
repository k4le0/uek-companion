import React from 'react'

import Wrapper from './Wrapper';
import { GridList } from 'material-ui/GridList';
import { GridTile } from 'material-ui/GridList';

const styles = {
  gridList: {
    width: '100%',
  },
  tileStyle: {
    borderRadius: '3px'
  },
  title: {
    fontSize: "16px",
    width: "70%",
  }
};

const StreamsAPI = {
  streams: [
    { number: 1, title: "Pierwszys Stream", image: "http://lorempixel.com/640/640/abstract/2/", featured: true, stories: 21 },
    { number: 2, title: "Drugi Stream", image: "http://lorempixel.com/640/640/abstract/3/", featured: false, stories: 21 },
    { number: 3, title: "Trzeci Stream", image: "http://lorempixel.com/640/640/abstract/4/", featured: false, stories: 21 },
    { number: 4, title: "Czwarty Stream", image: "http://lorempixel.com/640/640/abstract/5/", featured: true, stories: 21 }
  ],
  getStreams: function () { return this.streams }
};

class StreamsView extends React.Component {
  render() {
    return (
      <Wrapper>
        <GridList
          cols={2}
          cellHeight={216}
          padding={8}
          style={styles.gridList}
        >
          {
            StreamsAPI.getStreams().map(stream => (
              <GridTile
                key={stream.number}
                style={styles.tileStyle}
                title={stream.title}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                titlePosition="bottom"
                titleStyle={styles.title}
                cols={stream.featured ? 2 : 1}
                rows={1}>
                <img src={stream.image} />
              </GridTile>
            ))
          }
        </GridList>
      </Wrapper>
    );
  }
}

export default StreamsView;