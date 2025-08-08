# FlowForge Development Workflow

## Git Workflow

### Branch Strategy
- `main` - Production ready code
- `develop` - Integration branch
- `feature/*` - Feature development
- `hotfix/*` - Production fixes

### Commit Convention
```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Code style
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance
```

### Development Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/Bzu-Kho/flowforge.git
   cd flowforge
   ```

2. **Environment Setup**
   ```bash
   # Copy environment files
   cp .env.example .env.docker
   
   # Edit with your API keys
   nano .env.docker
   ```

3. **Docker Development**
   ```bash
   # Start development environment
   docker-compose -f docker-compose.dev.yml up --build
   
   # View logs
   docker-compose logs -f backend-dev
   docker-compose logs -f frontend-dev
   ```

4. **Local Development**
   ```bash
   # Backend
   cd backend
   npm install
   npm run dev
   
   # Frontend (new terminal)
   cd frontend
   npm install
   npm run dev
   ```

### Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# Integration tests
npm run test:integration
```

### Deployment

```bash
# Production build
docker-compose up --build -d

# Health check
curl http://localhost:3001/health
curl http://localhost:3002
```