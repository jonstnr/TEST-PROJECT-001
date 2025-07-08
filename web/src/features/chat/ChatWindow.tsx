import React, { useState } from 'react';

interface Message {
  user: string;
  text: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { user: 'You', text: input }]);
    setInput('');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, maxWidth: 400 }}>
      <div style={{ minHeight: 120, marginBottom: 8 }}>
        {messages.map((msg, idx) => (
          <div key={idx}><b>{msg.user}:</b> {msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        placeholder="Type a message..."
        style={{ width: '75%', marginRight: 8 }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
