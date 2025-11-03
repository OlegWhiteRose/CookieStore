package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *Handler) GetStatsAPI(ctx *gin.Context) {
	stats, err := h.Repository.GetStats()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"status":  "error",
			"message": "Failed to get stats",
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data":   stats,
	})
}
