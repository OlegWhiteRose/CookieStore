# CookieStore
Интернет-магазин печенья 

<img width="100%" src="readme-img.jpg" alt="CookieStore Preview">

## Ссылки

- [Сайт проекта](http://82.202.141.106)

## Используемые технологии

### Frontend
- **React** 
- **TypeScript** 
- **Redux Toolkit** 
- **React Router** 
- **Vite**
- **SCSS**
- **Axios**

### Backend
- **Node.js** + **Express**
- **TypeScript**
- **MongoDB** 
- **MinIO** 
- **Swagger** (API документация)
- **Docker** + **Nginx** 

## Ключевые решения

### Корзина на клиенте
- Корзина товаров хранится в **Redux store** и синхронизируется с **localStorage**
- Данные о товарах загружаются с сервера только при необходимости

### API и документация
- RESTful API с полной Swagger документацией
- Доступна по адресу `/api-docs`

### Deployment
- Docker Compose для оркестрации сервисов
- Nginx для проксирования и раздачи статики
- MinIO для хранения изображений
- MongoDB для хранения данных 

## Возможности проекта

- Каталог товаров с фильтрацией и поиском
- Карточки товаров с подробной информацией
- Корзина покупок
- Оформление заказа с валидацией
- Форма обратной связи
- Адаптивный дизайн для всех устройств
- Система уведомлений (alerts)
- Синхронизация корзины между вкладками через localStorage

## Запуск проекта

### Production (Docker)

```bash
# Клонирование репозитория
git clone https://github.com/OlegWhiteRose/CookieStore.git
cd CookieStore
npm install

# Настройка переменных окружения
# Создайте файл server/.env с настройками MongoDB и MinIO
# Пример в server/.env:
# PORT=8080
# NODE_ENV=production
# MONGO_USER=admin
# MONGO_PASSWORD=admin123
# MONGO_HOST=mongo
# MONGO_PORT=27017
# MONGO_DB=cookie_store
# MINIO_ENDPOINT=minio
# MINIO_PORT=9000
# MINIO_ROOT_USER=minioadmin
# MINIO_ROOT_PASSWORD=minioadmin123
# MINIO_BUCKET=cookies

# Запуск всех сервисов (MongoDB, MinIO, Server, Nginx)
cd server
npm install
npm run deploy

# Обновление статики (после сборки фронтенда)
# 1. Соберите фронтенд: npm run build (из корня)
# 2. Загрузите папку dist на сервер
# 3. Перезапустите nginx:
npm run update
```

### Development

#### Backend

```bash
cd server

# Установка зависимостей
npm install

# Настройка .env для development
# MONGO_HOST=localhost
# MINIO_ENDPOINT=localhost

# Запуск MongoDB и MinIO через Docker
docker compose -f docker/docker-compose.yml up mongo minio -d

# Заполнение базы данных
npm run seed

# Запуск dev сервера с nodemon
npm run dev

# Сервер запустится на порту 8080
# API документация: http://localhost:8080/api-docs
```

#### Frontend

```bash
# Из корня проекта

# Установка зависимостей
npm install

# Настройка .env
# VITE_API_BASE_URL=http://localhost:8080

# Запуск dev сервера
npm run dev

# Production сборка
npm run build
```

## API Документация

После запуска сервера документация доступна по адресу:
- /api-docs

