package repository

import (
	"database/sql"

	_ "github.com/lib/pq"
)

type Repository struct {
	db *sql.DB
}

func New(dsn string) (*Repository, error) {
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	var columnName string
	err = db.QueryRow("SELECT column_name FROM information_schema.columns WHERE table_name = 'stats' AND column_name = 'stat_type'").Scan(&columnName)
	if err == sql.ErrNoRows {
		var descExists string
		err = db.QueryRow("SELECT column_name FROM information_schema.columns WHERE table_name = 'stats' AND column_name = 'description'").Scan(&descExists)
		if err == nil {
			db.Exec("ALTER TABLE stats RENAME COLUMN description TO stat_type")
			db.Exec("UPDATE stats SET stat_type = 'cookies_sold' WHERE stat_type = 'кг печенья продано'")
			db.Exec("UPDATE stats SET stat_type = 'clients' WHERE stat_type = 'клиентов ежегодно'")
			db.Exec("UPDATE stats SET stat_type = 'reviews' WHERE stat_type = 'положительных отзывов'")
		}
	}

	return &Repository{
		db: db,
	}, nil
}
