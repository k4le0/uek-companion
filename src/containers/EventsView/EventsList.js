import React from "react";
import Firebase from "../../firebase";

import Wrapper from "./Wrapper";
import EventListCard from "../../components/EventListCard";

const EventsAPI = {
    events: [
        {
            number: 1,
            title: "Pierwszy Event",
            date: "2017-06-15T17:00",
            image: "http://lorempixel.com/360/216/",
            attend: 121,
            host: "Organizator",
            hostIcon: "http://lorempixel.com/40/40/",
            hostText: "Lorem Ipsum dolores maximus"
        },
        {
            number: 2,
            title: "Drugi Event",
            date: "2017-06-15T17:00",
            image: "http://lorempixel.com/360/216/",
            attend: 27,
            host: "Organizator",
            hostIcon: "http://lorempixel.com/40/40/",
            hostText: "Lorem Ipsum dolores maximus"
        },
        {
            number: 3,
            title: "Trzeci Event",
            date: "2017-06-15T17:00",
            image: "http://lorempixel.com/360/216/",
            attend: 172,
            host: "Organizator",
            hostIcon: "http://lorempixel.com/40/40/",
            hostText: "Lorem Ipsum dolores maximus"
        },
        {
            number: 4,
            title: "Czwarty Event",
            date: "2017-06-15T17:00",
            image: "http://lorempixel.com/360/216/",
            attend: 13,
            host: "Organizator",
            hostIcon: "http://lorempixel.com/40/40/",
            hostText: "Lorem Ipsum dolores maximus"
        },
        {
            number: 5,
            title: "Piąty Event",
            date: "2017-06-15T17:00",
            image: "http://lorempixel.com/360/216/",
            attend: 65,
            host: "Organizator",
            hostIcon: "http://lorempixel.com/40/40/",
            hostText: "Lorem Ipsum dolores maximus"
        }
    ],
    all: function () {
        return this.events
    },
    get: function (id) {
        const isEvent = event => event.number === id
        return this.events.find(isEvent)
    }
};

class EventsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {events: {}}
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents() {
        Firebase.db.ref('/events').on('value', (snapshot) => {
            this.setState({events: snapshot.val()});
        });
    }

    componentWillUnmount() {
        Firebase.db.ref('/events').off('value');
    }

    render() {
        let events = [];
        if(this.state.events) {
            events = Object.keys(this.state.events).map((event, i) => {
                console.log(event);
                return <EventListCard
                    number={i}
                    title={event}
                    image={this.state.events[event].image}
                    attend={this.state.events[event].attend}
                    date={this.state.events[event].date}
                    host={this.state.events[event].host}
                    hostIcon={this.state.events[event].hostIcon}
                    hostText={this.state.events[event].hostText}
                    key={i}/>
            });
            /*events = EventsAPI.all().map(event => (
                <EventListCard
                    number={event.number}
                    title={event.title}
                    image={event.image}
                    attend={event.attend}
                    date={event.date}
                    host={event.host}
                    hostIcon={event.hostIcon}
                    hostText={event.hostText}
                    key={event.number}/>
            ))*/
        }

        return (
            <Wrapper>
                {
                    events
                }
            </Wrapper>
        );
    }
}

export default EventsList;