import React from 'react';
import GridListExampleSingleLine from '../../components/Groups';
import GridListExampleComplex from '../../components/Classes';
import CardExampleWithAvatar from '../../components/SpecialEventCard';

class DiscussionView extends React.Component {
  render() {
    return (
      <div style={{position: 'relative', top: '64px'}}>
        <CardExampleWithAvatar/>
        <GridListExampleSingleLine />
        <GridListExampleComplex />
      </div>
    );
  }
}

export default DiscussionView;