import React , {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import WithClass from "../../../hoc/WithClass";
// import Radium from 'radium'
class Person extends Component {
  constructor(props){
    super(props);
    console.log("Person JS inside constructor!");
  }
  componentWillMount() {
    console.log("WIll Mount JS inside Person constructor!");
  }
  componentDidMount() {
    console.log("Did Mount JS inside Person constructor!");
    if (this.props.position === 0 ){
        this.inputElement.focus();
    };

  }
    render () {
      console.log("person JS inside Person render!");
      return (
        <WithClass className ={classes.Person}>
          <p onClick = {this.props.click}>I am {this.props.name}! I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input
            ref={(inp) => { this.inputElement=inp }}
            type="text"
            
            onChange = {this.props.changed}
            value = {this.props.name}/>
        </WithClass>
      )
    }
}
Person.propTypes = {
  click : PropTypes.func,
  name : PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default Person ;
