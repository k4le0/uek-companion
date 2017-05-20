import React from 'react';
import Chat from '../../components/Chat';

import {connect} from 'react-redux';
 
class ChatView extends React.Component {

  componentDidMount(){
    this.props.changeVisible(true);
  }

  render() {
    return (
      <div>
        <Chat />
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