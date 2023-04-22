import { useState, useEffect, useContext} from 'react';
import io from 'socket.io-client'; 

import StreamLayout from '../components/layouts/stream/stream';
import InputMessage from '../components/molecule/input_message/input_message';

import Chat from '../components/molecule/list/chat';
import { msg } from '../types/chat';

import { AuthContext } from '../hook/useAuth/context';

const socket = io('http://localhost:4000');


const ChatPage = () => {
  const {username} = useContext(AuthContext);

    const [messages, setMessages] = useState<msg[]>([]);
  
    const getMessage = (msg: string) => {
      const message = {
        msg: msg,
        from: username
      };

      socket.emit('send_message', message);
      setMessages([...messages, message]);
    }

    const receiveMessage = (message: msg) => {
      setMessages([...messages, message]);
    }

    const loadMessages = (msgs: msg[]) => {
      setMessages([...messages, ...msgs]);
    }
  
    useEffect(() => {
    
      socket.on('load_old_messages', loadMessages); 
      
      socket.on('receive_message', receiveMessage);
  
      return () => {
        socket.off('receive_message', receiveMessage);
        socket.off('load_old_messages', loadMessages); 
      }
    }, [messages])

  
    return (
      <StreamLayout
        title="Chat"
        sideMain={
          <Chat
            items={messages}
          />
        }
        actions={
          <InputMessage 
            placeholder='write ...'
            callback={getMessage}
          />
        }
      />
    );
}

export default ChatPage;