package handler

import (
	"net/http"
	"strconv"

	"cookiestore/internal/app/repository"

	"github.com/gin-gonic/gin"
)

func (h *Handler) GetCookiesAPI(ctx *gin.Context) {
	filter := repository.CookieFilter{}

	if cookieType := ctx.Query("type"); cookieType != "" {
		filter.Type = &cookieType
	}

	if costFromStr := ctx.Query("cost_from"); costFromStr != "" {
		if costFrom, err := strconv.ParseFloat(costFromStr, 64); err == nil {
			filter.CostFrom = &costFrom
		}
	}

	if costToStr := ctx.Query("cost_to"); costToStr != "" {
		if costTo, err := strconv.ParseFloat(costToStr, 64); err == nil {
			filter.CostTo = &costTo
		}
	}

	if qtyFromStr := ctx.Query("quantity_from"); qtyFromStr != "" {
		if qtyFrom, err := strconv.Atoi(qtyFromStr); err == nil {
			filter.QtyFrom = &qtyFrom
		}
	}

	if qtyToStr := ctx.Query("quantity_to"); qtyToStr != "" {
		if qtyTo, err := strconv.Atoi(qtyToStr); err == nil {
			filter.QtyTo = &qtyTo
		}
	}

	if format := ctx.Query("format"); format != "" {
		filter.Format = &format
	}

	if title := ctx.Query("title"); title != "" {
		filter.TitleLike = &title
	}

	response, err := h.Repository.GetCookies(filter)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"status":  "error",
			"message": "Failed to get cookies",
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"status":       "ok",
		"data":         response.Cookies,
		"max_price":    response.MaxPrice,
		"max_quantity": response.MaxQuantity,
	})
}

func (h *Handler) GetCookieByIDAPI(ctx *gin.Context) {
	idStr := ctx.Param("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"status":  "error",
			"message": "Invalid cookie ID",
		})
		return
	}

	cookie, err := h.Repository.GetCookieByID(id)
	if err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{
			"status":  "error",
			"message": "Cookie not found",
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data":   cookie,
	})
}
