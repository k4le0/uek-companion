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

export class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.match.params.name;
        this.submitQuestion = this.submitQuestion.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.state = {
            questions: null
        }
    }

    componentDidMount() {
        Firebase.db.ref(`/rooms/${this.name}/questions`).on('value', (snapshot) => {
            this.setState({questions: snapshot.val()});
        });
    }

    submitQuestion() {
        if (!this.input.value) return;
        Firebase.db.ref(`/rooms/${this.name}/questions`).push({
            text: this.input.value,
            user: JSON.parse(sessionStorage.getItem('user')),
            date: new Date().toLocaleTimeString('pl')
        });
        this.input.value = '';
    }

    uploadImage(e) {
        let that = this;
        try {
            if (e.target.files && e.target.files[0]) {
                if (!e.target.files[0].type.match('image.*')) {
                    alert("Please upload image");
                    return false;
                }
                let reader = new FileReader();
                reader.onload = function () {
                    Firebase.db.ref(`/rooms/${that.name}/questions`).push({
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

    componentWillUnmount() {
        Firebase.db.ref(`/rooms/${this.name}/questions`).off('value');
    }

    render() {
        let questions = [];
        if (this.state.questions) {
            questions = Object.entries(this.state.questions).map((question, i) => {
                return <li key={i} style={
                    question[1].user && question[1].user.uid === User.getUser().uid
                        ? {textAlign: 'right', marginRight: '20px'} : {marginRight: '20px'}}>
                    <div>
                        {question[1].type === 'image' ?
                            <img style={{maxWidth: '90%'}} src={question[1].text}/> : question[1].text }
                        <br />
                        <small
                            style={{color: 'gray'}}>{question[1].user ? question[1].user.email + ' ' + (question[1].date || '') : ''}</small>
                    </div>
                </li>
            });
        }
        return (
            <div>
                <ol style={{listStyleType: 'none'}}>
                    {questions}
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
                    <IconButton onClick={this.submitQuestion}>
                        <FontIcon className="material-icons">keyboard_return</FontIcon>
                    </IconButton>
                </span>
            </div>
        )
    }
}


export class Information extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.match.params.name;
        this.state = {
            information: null
        }
    }

    componentDidMount() {
        Firebase.db.ref(`/rooms/${this.name}/information`).on('value', (snapshot) => {
            this.setState({information: snapshot.val()});
        });
    }

    componentWillUnmount() {
        Firebase.db.ref(`/rooms/${this.name}/information`).off('value');
    }


    render() {
        return (
            <div>
                {this.state.information ? this.state.information : 'Brak dostępnych informacji'}
            </div>
        )
    }
}

export class Attendance extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.name = props.match.params.name;
        this.toggleAttendance = this.toggleAttendance.bind(this);
        this.state = {
            confirmed: false
        }
    }

    componentDidMount() {
        Firebase.db.ref(`/rooms/${this.name}/attendance/${User.getUser().uid}`).on('value', (snapshot) => {
            this.setState({confirmed: snapshot.val()});
        });
    }

    toggleAttendance() {
        Firebase.db.ref(`/rooms/${this.name}/attendance/${User.getUser().uid}`).set({
            confirmed: !this.state.confirmed
        });
        this.setState({confirmed: !this.state.confirmed});
    }

    componentWillUnmount() {
        Firebase.db.ref(`/rooms/${this.name}/attendance/${User.getUser().uid}`).off('value');
    }

    render() {
        return (
            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <button style={{backgroundColor: this.state.confirmed ? 'red' : 'limegreen'}}
                        onClick={this.toggleAttendance}>{this.state.confirmed ? 'Anuluj' : 'Potwierdź'}</button>
            </div>
        )
    }
}

export class Polls extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.name = props.match.params.name;
        this.submitPoll = this.submitPoll.bind(this);
        this.answers = {};
        this.state = {
            filled: false,
            questions: []
        }
    }

    componentDidMount() {
        Firebase.db.ref(`/rooms/${this.name}/polls/answers/${User.getUser().uid}`).on('value', (snapshot) => {
            this.setState({filled: !!snapshot.val()});
        });
        Firebase.db.ref(`/rooms/${this.name}/polls/questions`).on('value', (snapshot) => {
            this.setState({questions: snapshot.val()});
        });
    }

    submitPoll() {
        let answers = {};
        for (let i in this.answers) {
            answers[i] = this.answers[i].value;
        }
        Firebase.db.ref(`/rooms/${this.name}/polls/answers/${User.getUser().uid}`).set(answers);
        this.setState({filled: true});
        return false;
    }

    componentWillUnmount() {
        Firebase.db.ref(`/rooms/${this.name}/polls/questions`).off('value');
        Firebase.db.ref(`/rooms/${this.name}/polls/answers/${User.getUser().uid}`).off('value');
    }

    render() {
        console.log(this.state.questions);
        if (!this.state.questions) {
            return <div>Brak dostępnych ankiet</div>
        }

        if (this.state.filled) {
            return <div>Ankieta została już wypełniona</div>
        }

        const questions = Object.keys(this.state.questions).map(key => {
            return <li key={key}>
                {this.state.questions[key]}
                <br />
                <input type="text" ref={(input) => this.answers[key] = input}/>
            </li>
        });
        console.log(this.answers);
        return (
            <form onSubmit={this.submitPoll}>
                <ol>{questions}</ol>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Chat;