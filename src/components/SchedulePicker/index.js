import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
export default class SelectFieldExampleSimple extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
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
        <br />
      </div>
    );
  }
}