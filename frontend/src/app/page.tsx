'use client';

import { useState, useEffect } from 'react';
import { Play, Zap, Database, GitBranch, Settings, Terminal } from 'lucide-react';

export default function FlowForgePage() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Test backend connection
    fetch('/api/health')
      .then(() => setIsConnected(true))
      .catch(() => setIsConnected(false));
  }, []);

  return (
    <div className="h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">FlowForge</h1>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">v1.0.0</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                isConnected ? 'bg-green-400' : 'bg-red-400'
              }`}></div>
              <span className="text-sm text-gray-600">
                {isConnected ? 'Backend Connected' : 'Backend Disconnected'}
              </span>
            </div>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Deploy Flow</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4">Node Palette</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">🚀 Triggers</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  <div className="text-sm font-medium">Webhook</div>
                  <div className="text-xs text-gray-500">HTTP trigger</div>
                </div>
                <div className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  <div className="text-sm font-medium">Schedule</div>
                  <div className="text-xs text-gray-500">Cron trigger</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">💾 Data</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  <div className="text-sm font-medium">HTTP Request</div>
                  <div className="text-xs text-gray-500">Make API calls</div>
                </div>
                <div className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  <div className="text-sm font-medium">File Reader</div>
                  <div className="text-xs text-gray-500">Read files</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">🤖 AI Builders</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded cursor-pointer hover:from-purple-100 hover:to-blue-100 border border-purple-200">
                  <div className="text-sm font-medium text-purple-800">Document Builder</div>
                  <div className="text-xs text-purple-600">PDF, Word, MD</div>
                </div>
                <div className="p-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded cursor-pointer hover:from-purple-100 hover:to-blue-100 border border-purple-200">
                  <div className="text-sm font-medium text-purple-800">Media Builder</div>
                  <div className="text-xs text-purple-600">Audio, Video, Images</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Canvas */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-white">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to FlowForge</h3>
                <p className="text-gray-500 mb-4">Drag nodes from the palette to start building your automation workflow</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Create New Flow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}