import React, { useState } from 'react';

const Greeting = (props) => {
  const [message, setMessage] = useState("Hello, welcome to the React world!");

  const updateMessage = () => {
    setMessage(`Hello ${props.name || "User"}! Have a great day!`);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>{message}</h1>
      <button onClick={updateMessage} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Update Message
      </button>
    </div>
  );
};

export default Greeting;
