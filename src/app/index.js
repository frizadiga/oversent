import React from 'react';
import { useState } from 'react';
import './styles/index.scss';
import { BrowserRouter as Router, Route, } from 'react-router-dom'

// Components
import BottomBar from '../components/bottom-bar'

// Pages
import Chats from '../components/chats-page'
import Chat from '../components/chat-page'

const App = () => {
  const [ loading, setLoading ] = useState(true);

  setTimeout(() => setLoading(false), 0)

  if (loading) return null;

  return (
    <>
      <Router>
        <div>
          <Route path="/" component={Chats} exact/>
          <Route path="/chat" component={Chat} />
          <BottomBar />
        </div>
      </Router>
    </>
  )

}

export default App;
