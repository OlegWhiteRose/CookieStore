package config

import (
	"os"

	"github.com/spf13/viper"
)

type Config struct {
	ServerHost     string
	ServerPort     int
	AllowedOrigins string
}

func NewConfig() (*Config, error) {
	viper.SetConfigName("config")
	viper.SetConfigType("toml")
	viper.AddConfigPath("./config")
	viper.AddConfigPath("../config")
	viper.AddConfigPath("../../config")

	if err := viper.ReadInConfig(); err != nil {
		return nil, err
	}

	allowedOrigins := os.Getenv("ALLOWED_ORIGINS")
	if allowedOrigins == "" {
		allowedOrigins = viper.GetString("AllowedOrigins")
	}
	if allowedOrigins == "" {
		allowedOrigins = "*"
	}

	return &Config{
		ServerHost:     viper.GetString("ServerHost"),
		ServerPort:     viper.GetInt("ServerPort"),
		AllowedOrigins: allowedOrigins,
	}, nil
}
