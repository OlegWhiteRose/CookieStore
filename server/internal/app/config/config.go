package config

import (
	"github.com/spf13/viper"
)

type Config struct {
	ServerHost string
	ServerPort int
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

	return &Config{
		ServerHost: viper.GetString("ServerHost"),
		ServerPort: viper.GetInt("ServerPort"),
	}, nil
}
