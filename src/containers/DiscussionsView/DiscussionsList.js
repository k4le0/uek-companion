import React from "react";
import {Link} from "react-router-dom";

import Wrapper from "./Wrapper";

import {GridTile} from "material-ui/GridList";

import ClassChatItem from "../../components/ClassChatItem";
import SpecialChatTile from "../../components/SpecialChatTile";
import {GridList, List} from "material-ui";
import Firebase from "../../firebase";

const styles = {
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: '#fafafa',
        fontSize: '14px',
        width: '75%'
    },
};

/*const ChatsAPI = {
 chats: [
 {
 number: 1,
 title: "Specjany Chat",
 image: "http://lorempixel.com/360/216/abstract/1/",
 subtitle: "Jakiś opis chatu",
 special: true,
 basic: false,
 schedule: false
 },
 {
 number: 2,
 title: "Basic Group Chat",
 image: "http://lorempixel.com/192/216/abstract/2/",
 subtitle: "",
 special: false,
 basic: true,
 schedule: false
 },
 {
 number: 3,
 title: "Basic Group Chat 2",
 image: "http://lorempixel.com/192/216/abstract/3/",
 subtitle: "",
 special: false,
 basic: true,
 schedule: false
 },
 {
 number: 4,
 title: "Basic Group Chat 3",
 image: "http://lorempixel.com/192/216/abstract/4/",
 subtitle: "",
 special: false,
 basic: true,
 schedule: false
 },
 {
 number: 5,
 title: "Basic Group Chat 4",
 image: "http://lorempixel.com/192/216/abstract/8/",
 subtitle: "",
 special: false,
 basic: true,
 schedule: false
 },
 {
 number: 6,
 title: "Basic Group Chat 5",
 image: "http://lorempixel.com/192/216/abstract/6/",
 subtitle: "",
 special: false,
 basic: true,
 schedule: false
 },
 {
 number: 7,
 title: "Basic Group Chat 6",
 image: "http://lorempixel.com/192/216/abstract/7/",
 subtitle: "",
 special: false,
 basic: true,
 schedule: false
 },
 {
 number: 8,
 title: "Schedule Chat 1",
 image: "http://lorempixel.com/40/40/",
 subtitle: "Ilość osób: 14",
 special: false,
 basic: false,
 schedule: true
 },
 {
 number: 9,
 title: "Schedule Chat 2",
 image: "http://lorempixel.com/40/40/",
 subtitle: "Ilość osób: 1",
 special: false,
 basic: false,
 schedule: true
 },
 {
 number: 10,
 title: "Schedule Chat 3",
 image: "http://lorempixel.com/40/40/",
 subtitle: "Ilość osób: 0",
 special: false,
 basic: false,
 schedule: true
 },
 {
 number: 11,
 title: "Schedule Chat 4",
 image: "http://lorempixel.com/40/40/",
 subtitle: "Ilość osób: 27",
 special: false,
 basic: false,
 schedule: true
 },
 ],
 getSpecialChats: function () {
 return this.chats.filter(chat => chat.special === true)
 },
 getBasicChats: function () {
 return this.chats.filter(chat => chat.basic === true)
 },
 getScheduleChats: function () {
 return this.chats.filter(chat => chat.schedule === true)
 },
 };*/

class DiscussionsList extends React.Component {
    constructor(props) {
        super(props);
        this.getChats = this.getChats.bind(this);
        this.state = {
            chats: {}
        };
    }

    componentDidMount() {
        this.getChats();
    }

    getChats() {
        Firebase.db.ref('/rooms').on('value', (snapshot) => {
            this.setState({chats: snapshot.val()});
        });
    }

    componentWillUnmount() {
        Firebase.db.ref('/rooms').off('value');
    }

    render() {
        let special = [], basic = [], schedule = [], i = 0;
        for (let chat of Object.keys(this.state.chats)) {
            if (this.state.chats[chat].special) {
                special.push(
                    <Link to={`/discussion/${chat}`} key={i}>
                        <SpecialChatTile key={i}
                                         title={chat}
                                         subtitle={this.state.chats[chat].subtitle}
                                         image={this.state.chats[chat].image}/>
                    </Link>
                );
            }
            else if (this.state.chats[chat].basic) {
                basic.push(
                    <GridTile key={i}
                              title={chat}
                              containerElement={<Link to={`/discussion/${chat}`}/>}
                              titleStyle={styles.titleStyle}
                              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
                        <img src={this.state.chats[chat].image}/>
                    </GridTile>
                );
            }
            else {
                schedule.push(
                    <Link to={`/discussion/${chat}`} key={i}>
                        <ClassChatItem key={i} title={chat}
                                       subtitle={this.state.chats[chat].subtitle}
                                       image={this.state.chats[chat].image}/>
                    </Link>
                );
            }
            i++;
        }

        return (
            <Wrapper>
                {special}

                <GridList style={styles.gridList} cols={3}>
                    {basic}
                </GridList>
                <List>
                    {schedule}
                </List>


            </Wrapper>
        );
    }
}

export default DiscussionsList;