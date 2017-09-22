import React, {Component} from "react";
import Firebase from "../../firebase";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import User from "../../user";


class Chat extends Component {

    constructor(props, context) {
        super(props, context);
        this.getMessages = this.getMessages.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.state = {messages: []}
    }

    componentDidMount() {
        this.getMessages();
    }

    getMessages() {
        Firebase.db.ref(`/rooms/${this.props.name}/messages`).on('value', (snapshot) => {
            this.setState({messages: snapshot.val()});
        });
    }

    componentWillUnmount() {
        Firebase.db.ref(`/rooms/${this.props.name}/messages`).off('value')
    }

    uploadImage(e) {
        let that = this;
        console.log(e);
        try {
            if (e.target.files && e.target.files[0]) {
                if (!e.target.files[0].type.match('image.*')) {
                    alert("Please upload image");
                    return false;
                }
                let reader = new FileReader();
                reader.onload = function () {
                    Firebase.db.ref(`/rooms/${that.props.name}/messages`).push({
                        user: JSON.parse(sessionStorage.getItem('user')),
                        text: reader.result,
                        type: 'image',
                        date: new Date().toLocaleTimeString('pl')
                    });
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        } catch (e) {
            alert(e.message);
        }
        return false;
    }

    submitMessage() {
        if (!this.input.value) return;
        Firebase.db.ref(`/rooms/${this.props.name}/messages`).push({
            text: this.input.value,
            user: JSON.parse(sessionStorage.getItem('user')),
            date: new Date().toLocaleTimeString('pl')
        });
        this.input.value = '';
    }

    render() {
        let currentMessages = [];
        if (this.state.messages) {
            currentMessages = Object.entries(this.state.messages).map((message, i) => {
                return <li key={i} style={
                    message[1].user && message[1].user.uid === User.getUser().uid
                        ? {textAlign: 'right', marginRight: '20px'} : {marginRight: '20px'}}>
                    <div>
                        {message[1].type === 'image' ?
                            <img style={{maxWidth: '90%'}} src={message[1].text}/> : message[1].text }
                        <br />
                        <small
                            style={{color: 'gray'}}>{message[1].user ? message[1].user.email + ' ' + (message[1].date || '') : ''}</small>
                    </div>
                </li>
            });
        }
        return (
            <div>
                ChatroomComponent
                <ol style={{listStyleType: 'none'}}>
                    {currentMessages}
                </ol>
                <span style={{display: 'inline-flex', width: '100%'}}>
                    <label htmlFor="discussion-upload">
                        <FontIcon className="material-icons">image</FontIcon>
                    </label>
                    <input type="file" id="discussion-upload" accept="image/*" capture="camera"
                           style={{display: 'none'}}
                           onChange={this.uploadImage}/>
                    <input type="text" placeholder="Message" style={{width: '100%'}}
                           ref={(input) => this.input = input}/>
                    <IconButton onClick={this.submitMessage}>
                        <FontIcon className="material-icons">keyboard_return</FontIcon>
                    </IconButton>
                </span>
            </div>
        )
    }
}


export default Chat;