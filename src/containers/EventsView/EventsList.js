import React from 'react';

import Wrapper from './Wrapper';
import EventListCard from '../../components/EventListCard';

const EventsAPI = {
  events: [
    { number: 1, title: "Pierwszy Event", date: "2017-06-15T17:00", image: "http://lorempixel.com/360/216/", attend: 121, host: "Organizator", hostIcon: "http://lorempixel.com/40/40/", hostText: "Lorem Ipsum dolores maximus" },
    { number: 2, title: "Drugi Event", date: "2017-06-15T17:00", image: "http://lorempixel.com/360/216/", attend: 27, host: "Organizator", hostIcon: "http://lorempixel.com/40/40/", hostText: "Lorem Ipsum dolores maximus" },
    { number: 3, title: "Trzeci Event", date: "2017-06-15T17:00", image: "http://lorempixel.com/360/216/", attend: 172, host: "Organizator", hostIcon: "http://lorempixel.com/40/40/", hostText: "Lorem Ipsum dolores maximus" },
    { number: 4, title: "Czwarty Event", date: "2017-06-15T17:00", image: "http://lorempixel.com/360/216/", attend: 13, host: "Organizator", hostIcon: "http://lorempixel.com/40/40/", hostText: "Lorem Ipsum dolores maximus" },
    { number: 5, title: "Piąty Event", date: "2017-06-15T17:00", image: "http://lorempixel.com/360/216/", attend: 65, host: "Organizator", hostIcon: "http://lorempixel.com/40/40/", hostText: "Lorem Ipsum dolores maximus" }
  ],
  all: function () { return this.events },
  get: function (id) {
    const isEvent = event => event.number === id
    return this.events.find(isEvent)
  }
};

class EventsList extends React.Component {
  render() {
    return (
      <Wrapper>
        {
          EventsAPI.all().map(event => (
            <EventListCard
              number={event.number}
              title={event.title}
              image={event.image}
              attend={event.attend}
              date={event.date}
              host={event.host}
              hostIcon={event.hostIcon}
              hostText={event.hostText}
              key={event.number} />
          ))
        }
      </Wrapper>
    );
  }
}

export default EventsList;