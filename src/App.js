import './App.css';
import io from 'socket.io-client';
import { useEffect,useState } from 'react';
const socket= io.connect("http://localhost:3001");
function App() {
  const [message,setMessage]=useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");
 /* const sendMessage = ()=>{
    socket.emit("send_message",{message:"Hello"});


  };*/
  /*const sendMessage = ()=>{
    socket.emit("send_message",{message});


  };*/
  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  /*useEffect(()=>{
    socket.on("recieve_message",(data)=>{
      alert(data.message);

    });
  },
  [socket]);*/
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  useEffect(()=>{
    socket.on("recieve_message",(data)=>{
      setMessageReceived(data.message);
    });
  },
  [socket]);

  return (
   
    <div className="App">
      <input placeholder='Join Room' onChange={(event) => {
          setRoom(event.target.value);
        }}/>
        <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />

      <button onClick={sendMessage}>Send Message</button>
      <h1> Message:</h1>
      {messageReceived}
      
    </div>
  );
}

export default App;
