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
            this.setState({schedules: snapshot.val()});
        });
    }

  // handleChange = (event, index, value) => this.setState({value});

  render() {
    let showschedule = [], i = 0;
    for (let schedule of Object.keys(this.state.schedules)) {
    showschedule.push(
      <TableRow>
          <TableRowColumn>{this.state.schedules[schedule].termin}</TableRowColumn>
          <TableRowColumn>{this.state.schedules[schedule].start}</TableRowColumn>
          <TableRowColumn>{this.state.schedules[schedule].przedmiot}</TableRowColumn>
      // console.log(this.state.schedules[schedule].przedmiot)
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
            <TableHeaderColumn>Termin</TableHeaderColumn>
            <TableHeaderColumn>Godzina</TableHeaderColumn>
            <TableHeaderColumn>Przedmiot</TableHeaderColumn>
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