# 🚀 FlowForge - Visual Automation Platform

[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://docker.com)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black.svg)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**FlowForge** is an advanced visual flow-based automation platform with AI-powered specialized node builders, designed to compete with n8n, Node-RED, and Zapier.

## 🎯 Features

### 🚀 **Core Automation**
- **Visual Flow Designer** - Drag & drop interface for creating automation workflows
- **AI-Powered Node Builders** - Specialized builders for different use cases
- **Real-time Execution** - Live workflow execution with monitoring
- **Webhook Triggers** - HTTP endpoints for external integrations

### 🤖 **AI-Powered Specialized Builders**
- **📄 DocumentBuilder** - PDF, Word, Markdown, TXT processing
- **🎬 MediaBuilder** - Audio, video, image processing with FFmpeg
- **⚙️ DevToolsBuilder** - API clients, testing tools, deployment utilities
- **💬 CommunicationBuilder** - Email, SMS, chat, notifications

### 🏗️ **Node Categories**
- **🚀 Triggers** - Manual, Webhook, Cron, File Watcher
- **🔀 Logic & Flow** - If/Else, Switch, Loop, Merge/Split
- **💾 Data** - File I/O, HTTP Requests, Variables
- **🤖 AI & LLM** - OpenAI, Claude, Local models

## 🛠️ Tech Stack

### Backend
- **Node.js 18** with ES Modules
- **Express.js** REST API
- **WebSocket** real-time communication
- **Docker** containerization

### Frontend
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Flow** for visual editor

## 🚀 Quick Start

### Prerequisites
- Docker Desktop
- Node.js 18+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bzu-Kho/flowforge.git
   cd flowforge
   ```

2. **Start with Docker**
   ```bash
   docker-compose up -d
   ```

3. **Access the application**
   - Frontend: http://localhost:3002
   - Backend API: http://localhost:3001
   - Health Check: http://localhost:3001/health

## 📁 Project Structure

```
flowforge/
├── backend/                 # Node.js API Server
│   ├── src/
│   │   ├── nodes/          # Node implementations
│   │   │   ├── builders/   # AI-powered specialized builders
│   │   │   ├── triggers/   # Workflow triggers
│   │   │   ├── logic/      # Logic and flow control
│   │   │   ├── data/       # Data processing nodes
│   │   │   └── actions/    # Action nodes
│   │   ├── engine/         # Workflow execution engine
│   │   ├── services/       # Business logic services
│   │   └── routes/         # API routes
│   └── package.json
├── frontend/               # Next.js Web Interface
│   ├── src/
│   │   └── app/           # Next.js App Router
│   └── package.json
├── docker-compose.yml      # Docker configuration
└── README.md
```

## 🔧 Development

### Local Development

1. **Backend**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Docker Development
```bash
# Start development environment
docker-compose up --build

# View logs
docker-compose logs -f backend-dev
docker-compose logs -f frontend-dev

# Restart services
docker-compose restart backend-dev frontend-dev
```

## 🤖 AI-Powered Node Builders

FlowForge features specialized AI builders that can generate custom nodes:

### 📄 DocumentBuilder
- PDF creation and manipulation
- Word document processing
- Markdown conversion
- Text extraction and analysis

### 🎬 MediaBuilder
- Video processing with FFmpeg
- Image manipulation with Sharp
- Audio conversion and editing
- Computer vision with OpenCV

### ⚙️ DevToolsBuilder
- REST API clients
- Testing frameworks
- Docker deployment tools
- CI/CD pipeline generators

### 💬 CommunicationBuilder
- Email automation with Nodemailer
- SMS integration with Twilio
- Discord bot creation
- Slack notifications

## 🔄 Workflow Examples

### Basic HTTP to Email Flow
```
Webhook Trigger → HTTP Request → Email Sender
```

### File Processing Pipeline
```
File Watcher → Document Processor → AI Analysis → Notification
```

### Social Media Automation
```
Schedule Trigger → Content Generator → Multi-Platform Publisher
```

## 🛡️ Security

- Input validation and sanitization
- Rate limiting on APIs
- Secure webhook handling
- Environment variable configuration

## 📖 API Documentation

### Health Check
```bash
GET /health
```

### Node Registry
```bash
GET /api/nodes          # List all available nodes
GET /api/nodes/:type    # Get specific node type
```

### Workflow Execution
```bash
POST /api/workflows/execute    # Execute workflow
GET /api/workflows/:id/status  # Get execution status
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by n8n, Node-RED, and Zapier
- Built with modern web technologies
- Powered by AI for enhanced automation

---

**Made with ❤️ by the FlowForge Team**

For questions and support, please open an issue or contact us at [your-email@domain.com]