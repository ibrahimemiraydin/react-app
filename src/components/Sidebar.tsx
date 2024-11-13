import React from 'react';
import { Link } from 'react-router-dom';
import { Hash, Settings, Users, Plus } from 'lucide-react';

const servers = [
  { id: '1', name: 'General', icon: '🌐' },
  { id: '2', name: 'Gaming', icon: '🎮' },
  { id: '3', name: 'Music', icon: '🎵' },
];

const channels = [
  { id: '1', name: 'general', serverId: '1' },
  { id: '2', name: 'help', serverId: '1' },
  { id: '3', name: 'gaming-chat', serverId: '2' },
];

function Sidebar() {
  return (
    <div className="flex h-screen">
      {/* Servers sidebar */}
      <div className="w-[72px] bg-discord-darker flex flex-col items-center py-3 space-y-2">
        {servers.map((server) => (
          <div
            key={server.id}
            className="w-12 h-12 rounded-full bg-discord-dark flex items-center justify-center hover:rounded-2xl transition-all duration-200 cursor-pointer"
          >
            <span className="text-2xl">{server.icon}</span>
          </div>
        ))}
        <button className="w-12 h-12 rounded-full bg-discord-dark flex items-center justify-center hover:rounded-2xl transition-all duration-200 cursor-pointer text-green-500 hover:bg-green-500 hover:text-white">
          <Plus size={24} />
        </button>
      </div>

      {/* Channels sidebar */}
      <div className="w-60 bg-discord-dark">
        <div className="p-4 shadow-md">
          <h2 className="font-bold text-lg">Channels</h2>
        </div>
        <div className="px-2">
          {channels.map((channel) => (
            <Link
              key={channel.id}
              to={`/channels/${channel.serverId}/${channel.id}`}
              className="flex items-center p-2 rounded hover:bg-discord-hover text-gray-400 hover:text-white group"
            >
              <Hash size={20} className="mr-2" />
              {channel.name}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-0 left-[72px] w-60 bg-discord-darker p-2 flex items-center">
          <div className="flex-1 flex items-center">
            <div className="w-8 h-8 rounded-full bg-discord-dark mr-2"></div>
            <div>
              <div className="text-sm font-medium">Username</div>
              <div className="text-xs text-gray-400">#1234</div>
            </div>
          </div>
          <button className="p-2 hover:bg-discord-dark rounded">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;