import React , {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
  constructor(props){
    super(props);
    console.log("Persons JS inside constructor!");
  }
  componentWillMount() {
    console.log("WIll Mount JS inside Persons constructor!");
  }
  componentDidMount() {
    console.log("Did Mount JS inside Persons constructor!");
  }
  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE Person.js] Inside componentWillReceiveProps",nextProps);
  }
  shouldComponentUpdate(nextProps,nextState) {
    console.log("[UPDATE Person.js] Inside shouldComponentUpdate",nextProps,nextState);
    return nextProps.persons !== this.props.person || nextProps.changed!==this.props.changed || nextProps.clicked !== this.props.clicked;
  }
  componentWillUpdate(nextProps,nextState) {
    console.log("[UPDATE Person.js] Inside componentWillUpdate",nextProps,nextState);
  }
  componentDidUpdate() {
    console.log("[UPDATE Person.js] Inside componentDidUpdate");
  }

  render () {
    console.log("person JS inside Persons render!")
    return this.props.persons.map( ( person, index ) => {
        return <Person
          click={() => this.props.clicked( index )}
          position = {index}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={( event ) => this.props.changed( event, person.id )} />
      } );
    }
  }

export default Persons;
