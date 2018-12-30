import React from 'react';
import { PropTypes as T } from 'prop-types'
import './style.scss'

const ChatCard = (props) => {
  const { sender, message } = props

  return (
    <div className="chat-card">
      <img alt="avatar" src="./Logo.svg" />
      <div>
        <div>{sender}</div>
        <div>{message}</div>
      </div>
    </div>
  )
}

ChatCard.propTypes = {
  sender: T.string.isRequired,
  message: T.string.isRequired,
};

export default ChatCard;