package api

import (
	"fmt"
	"log"

	"cookiestore/internal/app/config"
	"cookiestore/internal/app/dsn"
	"cookiestore/internal/app/handler"
	"cookiestore/internal/app/repository"
	"cookiestore/internal/app/storage"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/sirupsen/logrus"
)

func StartServer() {
	log.Println("Starting server")

	_ = godotenv.Load()

	cfg, err := config.NewConfig()
	if err != nil {
		logrus.Fatal("Failed to load config:", err)
	}

	postgresString := dsn.FromEnv()
	fmt.Println("Database DSN:", postgresString)

	repo, err := repository.New(postgresString)
	if err != nil {
		logrus.Fatal("Failed to initialize repository:", err)
	}

	minioStorage, err := storage.NewMinIOStorage()
	if err != nil {
		logrus.Error("MinIO storage initialization error:", err)
	} else {
		logrus.Info("MinIO storage initialized successfully")
	}

	h := handler.NewHandler(cfg, repo, minioStorage)

	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	api := r.Group("/api")
	{
		api.GET("/stats-showcase", h.GetStatsAPI)
		api.GET("/cookies", h.GetCookiesAPI)
		api.GET("/contacts", h.GetContactsAPI)
		api.GET("/cookies/:id", h.GetCookieByIDAPI)
	}

	serverAddr := fmt.Sprintf("%s:%d", cfg.ServerHost, cfg.ServerPort)
	log.Printf("Server starting on %s", serverAddr)
	r.Run(serverAddr)
	log.Println("Server down")
}
