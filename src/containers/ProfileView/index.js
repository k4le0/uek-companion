import React from 'react';

import Wrapper from './Wrapper';
import ProfileCard from '../../components/ProfileCard';

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
};

class ProfileView extends React.Component {
  render() {
    const user = UserAPI.getUser();

    return (
      <Wrapper>
        <ProfileCard username={user.username} number={user.number} image={user.image}/>
      </Wrapper>
    );
  }
}

export default ProfileView;