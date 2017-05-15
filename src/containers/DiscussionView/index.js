import React from 'react';
import GridListExampleSingleLine from '../../components/Groups';
import GridListExampleComplex from '../../components/Classes';

class DiscussionView extends React.Component {
  render() {
    return (
      <div>
        <GridListExampleSingleLine />
        <GridListExampleComplex />
      </div>
    );
  }
}

export default DiscussionView;