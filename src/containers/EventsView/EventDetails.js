import React from 'react';

import Wrapper from './Wrapper';
import EventDetailsCard from '../../components/EventDetailsCard';

const EventsAPI = {
  events: [
    { number: 1, title: "Pierwszy Event", image: "http://placehold.it/350x150/8D0126/8D0126", attend: 121 },
    { number: 2, title: "Drugi Event", image: "http://placehold.it/350x150/303440/303440", attend: 27 },
    { number: 3, title: "Trzeci Event", image: "http://placehold.it/350x150/8D0126/8D0126", attend: 172 },
    { number: 4, title: "Czwarty Event", image: "http://placehold.it/350x150/BDBDBD/BDBDBD", attend: 13 },
    { number: 5, title: "Piąty Event", image: "http://placehold.it/350x150/8D0126/8D0126", attend: 65 }
  ],
  all: function () { return this.events },
  get: function (id) {
    const isEvent = event => event.number === id
    return this.events.find(isEvent)
  }
};

class EventDetails extends React.Component {
  render() {
    const event = EventsAPI.get(
      parseInt(this.props.match.params.number, 10)
    );

    return (
      <Wrapper>
        <EventDetailsCard number={event.number}
          title={event.title}
          image={event.image}
          attend={event.attend} />
      </Wrapper>
    );
  }
}

export default EventDetails;