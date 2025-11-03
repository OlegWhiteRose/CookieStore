package dsn

import (
	"fmt"
	"os"
)

func FromEnv() string {
	host := os.Getenv("POSTGRES_HOST")
	port := os.Getenv("POSTGRES_PORT")
	user := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")
	dbname := os.Getenv("POSTGRES_DB")

	if host == "" {
		host = "localhost"
	}
	if port == "" {
		port = "5433"
	}
	if user == "" {
		user = "cookiestore_user"
	}
	if password == "" {
		password = "cookiestore_password"
	}
	if dbname == "" {
		dbname = "cookiestore_db"
	}

	return fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
}
