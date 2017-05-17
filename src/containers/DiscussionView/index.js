import React from 'react';
import Divider from 'material-ui/Divider';
import GridListExampleSingleLine from '../../components/Groups';
import GridListExampleComplex from '../../components/Classes';
import CardExampleWithAvatar from '../../components/SpecialEventCard';

class DiscussionView extends React.Component {
  render() {
    return (
      <div style={{maxWidth: '100%', overflowX: 'hidden', position: 'relative', top: '64px', marginBottom: '56px'}}>
        <CardExampleWithAvatar/>
        <GridListExampleSingleLine />
        <GridListExampleComplex />
      </div>
    );
  }
}

export default DiscussionView;