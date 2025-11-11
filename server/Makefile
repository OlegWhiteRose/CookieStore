.PHONY: help build run docker-up docker-down docker-build docker-logs clean test

help: 
	@echo "Доступные команды:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: 
	go build -o bin/server ./cmd/server

run: 
	go run ./cmd/server/main.go

docker-up: 
	docker-compose up -d

docker-down: 
	docker-compose down

docker-build: 
	docker-compose up --build -d

docker-logs: 
	docker-compose logs -f

	rm -rf bin/
	docker-compose down -v

test: 
	go test -v ./...

deps: 
	go mod download
	go mod tidy

seed-cookies: 
	docker exec -i cookiestore_postgres psql -U cookiestore_user -d cookiestore_db < seed_cookies.sql

migrate-stats: 
	docker exec -i cookiestore_postgres psql -U cookiestore_user -d cookiestore_db < migration_stats.sql

clear-minio: 
	docker exec cookiestore_minio mc rm --recursive --force /data/cookies/ || true
