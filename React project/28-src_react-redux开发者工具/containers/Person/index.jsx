import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

  addPerson = ()=>{
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const person = {id:nanoid(),name,age}
    this.props.addPerson(person);
    this.nameNode.value = '';
    this.ageNode.value = '';
  }
  render() {
    const {persons, count} = this.props;
    return (
      <div>
        <h2>Person Component</h2>
        <p>Sum of Count Component: {count}</p>
        <input type="text" placeholder="name" ref={c => this.nameNode = c}/>&nbsp;
        <input type="text" placeholder="age" ref={c => this.ageNode = c}/>&nbsp;
        <button onClick={this.addPerson}>add</button>
        <ul>
          {
            persons.map((person)=>{
              return <li key={person.id}>{person.name} ------ {person.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({persons:state.persons, count :state.count}),
  {
    addPerson:createAddPersonAction
  }
)(Person)
