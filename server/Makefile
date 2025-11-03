.PHONY: help build run docker-up docker-down docker-build docker-logs clean test

help: ## Показать справку
	@echo "Доступные команды:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Собрать бинарный файл
	go build -o bin/server ./cmd/server

run: ## Запустить сервер локально
	go run ./cmd/server/main.go

docker-up: ## Запустить все сервисы в Docker
	docker-compose up -d

docker-down: ## Остановить все сервисы Docker
	docker-compose down

docker-build: ## Пересобрать и запустить Docker контейнеры
	docker-compose up --build -d

docker-logs: ## Показать логи Docker контейнеров
	docker-compose logs -f

clean: ## Очистить сгенерированные файлы
	rm -rf bin/
	docker-compose down -v

test: ## Запустить тесты
	go test -v ./...

deps: ## Установить зависимости
	go mod download
	go mod tidy
