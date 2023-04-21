import { useState, useEffect} from 'react';
import io from 'socket.io-client'; 

const socket = io('http://localhost:4000');


const ChatPage = () => {
    const [msg, setMsg] = useState<string>('');
    const [messages, setMessages] = useState<{}[]>([]);
  
    const getMessage = () => {
      socket.emit('send_message', msg);
      setMsg('');
    }
  
    useEffect(() => {
      const receiveMessage = (message: string) => {
        console.log(message);
      }
      socket.on('receive_message', receiveMessage);
  
      return () => {
        socket.off('receive_message', receiveMessage);
      }
    }, [])
  
    return (
      <div className="App">
        <h1>Hello</h1>
       
          <input type="text" 
            value={msg}
            onChange={
              (e:{target:{value:string}})=>setMsg(e.target.value)
            }
          />
          <button onClick={getMessage}>Send</button>
  
      </div>
    );
}

export default ChatPage;