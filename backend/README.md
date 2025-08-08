# FlowForge Backend

Backend API server for FlowForge visual automation platform.

## Features

- **Node Registry** - Management of workflow nodes
- **Workflow Engine** - Execution of visual workflows
- **WebSocket Support** - Real-time communication
- **AI Integration** - Specialized node builders
- **REST API** - Complete automation endpoints

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production server
npm start
```

## API Endpoints

- `GET /health` - Health check
- `GET /api/nodes` - List all available nodes
- `GET /api/nodes/category/:category` - Nodes by category
- `POST /api/workflows/execute` - Execute workflow

## Environment Variables

```env
PORT=3001
NODE_ENV=development
OPENAI_API_KEY=your_key_here
FIRECRAWL_API_KEY=your_key_here
```