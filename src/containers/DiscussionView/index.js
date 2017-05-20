import React from 'react';

import Wrapper from './Wrapper';

import GridListExampleSingleLine from '../../components/Groups';
import GridListExampleComplex from '../../components/Classes';
import SpecialChatTile from '../../components/SpecialChatTile';

class DiscussionView extends React.Component {
  render() {
    return (
      <Wrapper>
        <SpecialChatTile />
      </Wrapper>
    );
  }
}

export default DiscussionView;