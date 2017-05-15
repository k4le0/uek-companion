import React from 'react';
import GridListExampleSingleLine from '../../components/Groups';
import GridListExampleComplex from '../../components/Classes';
import CardExampleWithAvatar from '../../components/SpecialEventCard';

class DiscussionView extends React.Component {
  render() {
    return (
      <div>
        <CardExampleWithAvatar/>
        <GridListExampleSingleLine />
        <GridListExampleComplex />
      </div>
    );
  }
}

export default DiscussionView;