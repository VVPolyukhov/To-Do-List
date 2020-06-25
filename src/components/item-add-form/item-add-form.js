import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  };

  onSubmit = (event) => {
    event.preventDefault()
    const {label} = this.state
    if (label !== '') {
		this.props.onItemAdded(label)
        this.setState({
            label: ''
        });
    }
}

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>

        <input type="text"
               className="form-control new-todo-label"
               value={this.state.label}
               onChange={this.onLabelChange}
               placeholder="What needs to be done?" />

        <button type="submit"
                className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}