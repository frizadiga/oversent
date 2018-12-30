import React from 'react';
import ChatCard from '../chat-card';

const ChatsPage = () => {
  return (
    <div>
      <p>Chats Page</p>
      <ChatCard
        key={1}
        sender={'tomomi'}
        message={'hi from far'}
      />
    </div>
  )
}

export default ChatsPage