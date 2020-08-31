import React, { useState, useEffect } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import firebase from 'firebase';
import './App.css';
import Message from './Components/Message';
import db from './Firebase';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      })
  }, []);

  useEffect(() => {
    let user = '';
    while (!user)
      user = prompt("Enter Username");
    setUserName(user);
  }, []);

  const saveMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      userName,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="app">

      <img src="https://img.icons8.com/fluent/144/000000/facebook-messenger.png" alt='logo' />
      {userName && <div className="app__heading">Hello {userName}! Let's Chat!! 🚀</div>}

      <FlipMove className="app__flipMove" id="app__flipMove">
        {messages.map(message => (
          <Message key={message.id} {...message} currentUserName={userName} />
        ))}
      </FlipMove>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input placeholder="Enter your message..." autoFocus value={input} onChange={({ target }) => setInput(target.value)} />
          <IconButton disabled={!input} variant="contained" color="primary" type="submit" onClick={saveMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

    </div>
  )
}

export default App
