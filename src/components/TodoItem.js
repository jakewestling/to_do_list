import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      display: 'flex',
      flexDirection: 'row',
      background: '#e8ebef',
      padding: '5px',
      marginBottom: '4px',
      border: '1px #ccc solid',
      textDecoration: this.props.todo.completed ?
       'line-through' : 'none'
    }
  }
  getLeftStyle = () => {
    return {
      display: 'inline-block',
      wordBreak: 'break-word'
    }
  }
  getRightStyle = () => {
    return {
      flex: '40px'
    }
  }
  getCheckStyle = () => {
    return {
      background: 'green'
    }
  }
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <span style={this.getLeftStyle()} >
          <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} className="input"/>
          { title }
        </span>
        <span style={this.getRightStyle()}>
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}><i className="fas fa-times"></i></button>
        </span>
          
        
      </div>
    )
  }
}
// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}
const btnStyle = {
  background: '#df2020',
  color: '#fff',
  border: 'none',
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default TodoItem
