FROM golang:1.23-alpine AS builder

WORKDIR /app

# Копируем go.mod и go.sum для кэширования зависимостей
COPY go.mod go.sum ./
RUN go mod download

# Копируем весь проект
COPY . .

# Собираем приложение
RUN CGO_ENABLED=0 GOOS=linux go build -o /server ./cmd/server

FROM alpine:latest

WORKDIR /root/

# Копируем бинарный файл из builder
COPY --from=builder /server .
COPY --from=builder /app/config ./config

EXPOSE 8080

CMD ["./server"]
