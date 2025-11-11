#!/bin/bash

set -e

echo "🚀 Starting CookieStore Production Deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .env.prod exists
if [ ! -f .env.prod ]; then
    echo -e "${RED}❌ Error: .env.prod file not found${NC}"
    echo -e "${YELLOW}Please create .env.prod from .env.prod.example${NC}"
    exit 1
fi

# Build frontend
echo -e "${GREEN}📦 Building frontend...${NC}"
npm ci
npm run build

# Stop existing containers
echo -e "${GREEN}🛑 Stopping existing containers...${NC}"
docker-compose --env-file .env.prod -f docker-compose.prod.yml down

# Build and start containers
echo -e "${GREEN}🐳 Building and starting Docker containers...${NC}"
docker-compose --env-file .env.prod -f docker-compose.prod.yml up -d --build

# Wait for services to be ready
echo -e "${GREEN}⏳ Waiting for services to start...${NC}"
sleep 10

# Check container status
echo -e "${GREEN}📊 Container status:${NC}"
docker-compose -f docker-compose.prod.yml ps

# Show logs
echo -e "${GREEN}📝 Recent logs:${NC}"
docker-compose -f docker-compose.prod.yml logs --tail=50

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌐 Your application is available at http://82.202.141.106${NC}"
