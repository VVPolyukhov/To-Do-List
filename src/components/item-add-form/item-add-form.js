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
<<<<<<< HEAD
    event.preventDefault()
    const {label} = this.state
    if (label !== '') {
		this.props.onItemAdded(label)
        this.setState({
            label: ''
        });
    }
}
=======
        event.preventDefault()
        const {label} = this.state
        if (label !== '') {
            this.props.onItemAdded(label)
            this.setState({
                label: ''
            });
        }
    }
>>>>>>> fa3911d4863f8d54f6de53ddc6f5ee106c838f16

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