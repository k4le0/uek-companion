import React, {Component} from "react";


class Chat extends Component {

    constructor(props, context) {
        super(props, context);
        this.getMessages = this.getMessages.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.state = {messages: []}
    }

    componentDidMount() {
        this.getMessages();
    }

    getMessages() {
        this.props.db.ref(`/rooms/${this.props.name}/messages`).on('value', (snapshot) => {
            this.setState({messages: snapshot.val()});
        });
    }

    componentWillUnmount() {
        this.props.db.ref(`/rooms/${this.props.name}/messages`).off('value')
    }

    submitMessage(event) {
        this.props.db.ref(`/rooms/${this.props.name}/messages`).push({
            text: this.input.value,
            user: JSON.parse(sessionStorage.getItem('user'))
        });
        this.input.value = '';
    }

    render() {
        let currentMessages = [];
        if(this.state.messages) {
            currentMessages = Object.entries(this.state.messages).map((message, i) => {
                return <li key={i}>{message[1].text}</li>
            });
        }
        return (
            <div>
                ChatroomComponent
                <ol>
                    {currentMessages}
                </ol>
                <input type="text" placeholder="Message" ref={(input) => this.input = input}/>
                <button onClick={this.submitMessage}>Submit Message</button>
                <button >Test</button>
            </div>
        )
    }
}


export default Chat;