-- Миграция для обновления таблицы stats
-- Переименование столбца description в stat_type и обновление данных

\c cookiestore_db;

-- Переименовываем столбец description в stat_type
ALTER TABLE stats RENAME COLUMN description TO stat_type;

-- Обновляем существующие данные
UPDATE stats SET stat_type = 'cookies_sold' WHERE stat_type = 'кг печенья продано';
UPDATE stats SET stat_type = 'clients' WHERE stat_type = 'клиентов ежегодно';
UPDATE stats SET stat_type = 'reviews' WHERE stat_type = 'положительных отзывов';

-- Изменяем тип столбца если нужно
ALTER TABLE stats ALTER COLUMN stat_type TYPE VARCHAR(100);
