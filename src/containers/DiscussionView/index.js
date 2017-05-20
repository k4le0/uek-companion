import React from 'react';

import Wrapper from './Wrapper';

import GridListExampleSingleLine from '../../components/Groups';
import GridListExampleComplex from '../../components/Classes';
import SpecialChatTile from '../../components/SpecialChatTile';

const ChatsAPI = {
  chats: [
    { number: 1, title: "Specjany Chat", subtitle: "Jakiś opis chatu", special: true, basic: false, schedule: false },
    { number: 2, title: "Basic Group Chat", subtitle: "", special: false, basic: true, schedule: false },
    { number: 3, title: "Schedule Chat", subtitle: "Jakiś opis chatu", special: false, basic: true, schedule: true }
  ],
  getSpecialChats: function () { return this.chats.filter(chat => chat.special === true) },
  getBasicChats: function () { return this.chats.filter(chat => chat.basic === true) },
  getScheduleChats: function () { return this.chats.filter(chat => chat.schedule === true) },
};

class DiscussionView extends React.Component {
  render() {
    return (
      <Wrapper>
        {
          ChatsAPI.getSpecialChats().map(chat => (
            <SpecialChatTile key={chat.number}
              title={chat.title}
              subtitle={chat.subtitle}
            />
          ))
        }
        <GridListExampleSingleLine />
      </Wrapper>
    );
  }
}

export default DiscussionView;