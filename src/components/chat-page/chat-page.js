import React from 'react';
import ChatCard from '../chat-card';

const data = [
  {id: 1, sender: 'tomomi', message: 'hi friza :D'},
  {id: 2, sender: 'me', message: 'hi sweety'}
]

const ChatPage = () => {
  return (
    <React.Fragment>
      <p>Chat Page</p>
      {!!data && data.map((item, i) =>
        <ChatCard
          key={item.id}
          sender={item.sender}
          message={item.message}
        />
      )}
    </React.Fragment>
  )
}

export default ChatPage;