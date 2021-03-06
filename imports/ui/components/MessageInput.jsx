import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import '../../api/messages/methods';
import styles from './MessageInput.style';

class MessageInput extends Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };
  }

  render () {
    return (
      <div style={styles.inputWarpper}>
        <input
          style={styles.input}
          type='text'
          placeholder='Write a message'
          value={this.state.value}
          onChange={e => this.handleOnChange(e)}
          onKeyDown={e => this.handleKeyDown(e)}
          />
      </div>
    )
  }

  handleOnChange (e) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown (e) {
    if (e.key === 'Enter') {
      Meteor.call('messages.insert', this.state.value);
      this.setState({ value: '' });
    }
  }
}

export default MessageInput
