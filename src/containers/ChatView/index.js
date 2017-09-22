import React from "react";
import Chat from "../../components/Chat";

import {connect} from "react-redux";

class ChatView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.changeVisible(true);
    }

    render() {
        return (
            <div>
                <Chat name={this.props.match.params.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chat: state.chatReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeVisible: (value) => {
            dispatch({
                type: "CHANGE",
                payload: value
            })
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatView);