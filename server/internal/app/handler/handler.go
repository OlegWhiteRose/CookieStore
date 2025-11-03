package handler

import (
	"cookiestore/internal/app/config"
	"cookiestore/internal/app/repository"
	"cookiestore/internal/app/storage"
)

type Handler struct {
	Config     *config.Config
	Repository *repository.Repository
	Storage    *storage.MinIOStorage
}

func NewHandler(cfg *config.Config, repo *repository.Repository, storage *storage.MinIOStorage) *Handler {
	return &Handler{
		Config:     cfg,
		Repository: repo,
		Storage:    storage,
	}
}
