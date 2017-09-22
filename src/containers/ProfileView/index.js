import React from 'react';

import { List } from 'material-ui/List';

import Wrapper from './Wrapper';
import ProfileCard from '../../components/ProfileCard';
import GroupListItem from '../../components/GroupListItem';

const UserAPI = {
  user: {
    username: "newstudent",
    number: "123789",
    image: "http://placehold.it/92x92/ffffff/ffffff",
    groups: [
      { number: 1, name: "DzIS1000", image: "http://placehold.it/40x40/8D0126/8D0126", members: 21 },
      { number: 2, name: "DzIS2000", image: "http://placehold.it/40x40/8D0126/8D0126", members: 21 },
      { number: 3, name: "DzIS3000", image: "http://placehold.it/40x40/8D0126/8D0126", members: 21 }
    ]
  },
  getUser: function () { return this.user },
  getGroups: function () { return this.user.groups },
};

class ProfileView extends React.Component {
  render() {
    return (
      <Wrapper>
        <ProfileCard />
        <List>
          {
            UserAPI.getGroups().map(group => (
              <GroupListItem groupName={group.name}
                image={group.image}
                membersCount={group.members}
                key={group.number} />
            ))
          }
        </List>
      </Wrapper>
    );
  }
}

export default ProfileView;