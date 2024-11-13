import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Plus, Smile } from 'lucide-react';

function Chat() {
  const { channelId } = useParams();
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, user: 'John Doe', content: 'Hello everyone!', timestamp: '12:00' },
    { id: 2, user: 'Jane Smith', content: 'Hey! How are you?', timestamp: '12:01' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-discord-dark">
      {/* Channel header */}
      <div className="h-12 flex items-center px-4 shadow-md bg-discord-darker">
        <span className="font-bold">Channel Name</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-discord-hover mr-3"></div>
            <div>
              <div className="flex items-center">
                <span className="font-medium mr-2">{msg.user}</span>
                <span className="text-xs text-gray-400">{msg.timestamp}</span>
              </div>
              <p className="text-gray-300">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="p-4">
        <div className="flex items-center bg-discord-hover rounded-lg">
          <button className="p-3 hover:text-white text-gray-400">
            <Plus size={20} />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message #channel-name"
            className="flex-1 bg-transparent p-3 focus:outline-none text-white"
          />
          <button className="p-3 hover:text-white text-gray-400">
            <Smile size={20} />
          </button>
          <button className="p-3 hover:text-white text-gray-400">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;