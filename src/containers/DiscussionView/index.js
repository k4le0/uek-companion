import React from 'react';

import Wrapper from './Wrapper';

import GridListExampleSingleLine from '../../components/Groups';
import GridListExampleComplex from '../../components/Classes';
import CardExampleWithAvatar from '../../components/SpecialChatTile';

class DiscussionView extends React.Component {
  render() {
    return (
      <Wrapper>
        <CardExampleWithAvatar />
        <GridListExampleSingleLine />
        <GridListExampleComplex />
      </Wrapper>
    );
  }
}

export default DiscussionView;