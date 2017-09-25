import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Firebase from "../../firebase";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const styles = {
  customWidth: {
    width: '100%',
  },
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */

class SelectFieldExampleSimple extends React.Component {

     constructor(props) {
        super(props);
        this.getSchedule = this.getSchedule.bind(this);
        this.state = {
            schedules: {},
            selectable: false,
            showCheckboxes: false
        };
    }
  componentDidMount() {
        this.getSchedule();
    }
  getSchedule() {
        Firebase.db.ref('/groups/KrZZIs1011Io/').on('value', (snapshot) => {
            //this.setState({schedules: snapshot.val()});
            //console.log(this.state.schedules);

            var byDate = snapshot.val();
            byDate.sort(function(a,b) {
              if(Date.parse(a.termin) - Date.parse(b.termin) == 0) {
                return a.start < b.start ? -1 : 1;
              }
              return Date.parse(a.termin) - Date.parse(b.termin);
            });
            console.log('by date:');
            console.log(byDate);
            this.setState({schedules: byDate})
        });
    }

  // handleChange = (event, index, value) => this.setState({value});

  render() {
    let showschedule = [], i = 0;
    let myPaddingStyle = {
    paddingTop: 1,
    paddingBottom: 1,
}
    for (let schedule of Object.keys(this.state.schedules)) {
    showschedule.push(
      <TableRow >
          <TableRowColumn style={myPaddingStyle}>{this.state.schedules[schedule].termin}</TableRowColumn>
          <TableRowColumn style={myPaddingStyle} >{this.state.schedules[schedule].start}</TableRowColumn>
          <TableRowColumn style={myPaddingStyle}>{this.state.schedules[schedule].przedmiot}</TableRowColumn>
      
      </TableRow>
    );
  }
    return (
      <div>
        {/*<SelectField
          floatingLabelText="Plan zajęć"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="Semestr III Luty" />
          <MenuItem value={2} primaryText="Semestr III Marzec" />
          <MenuItem value={3} primaryText="Semestr III Kwiecien" />
          <MenuItem value={4} primaryText="Semestr III Maj" />
          <MenuItem value={5} primaryText="Semestr III Czerwiec" />
        </SelectField>
        <br />*/}
        Plan zajec 
      <Table>
        <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
          >
          <TableRow>
            <TableHeaderColumn style={myPaddingStyle}>Termin</TableHeaderColumn>
            <TableHeaderColumn style={myPaddingStyle}>Godzina</TableHeaderColumn>
            <TableHeaderColumn style={myPaddingStyle}>Przedmiot</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
        selectable={this.state.selectable}
        displayRowCheckbox={this.state.showCheckboxes}
        >
          {showschedule}
        </TableBody>
      </Table>


      </div>
    );
  }
}
export default SelectFieldExampleSimple;