import React from 'react';
import SchedulePicker from '../../components/SchedulePicker';

class ScheduleView extends React.Component {
  render() {
    return (
      <div style={{position: 'absolute', top: '64px', minWidth: '100%'}}>
        <SchedulePicker/>
      </div>
    );
  }
}

export default ScheduleView;