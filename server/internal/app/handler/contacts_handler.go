package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *Handler) GetContactsAPI(ctx *gin.Context) {
	contacts, err := h.Repository.GetContacts()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"status":  "error",
			"message": "Failed to get contacts",
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data":   contacts,
	})
}
