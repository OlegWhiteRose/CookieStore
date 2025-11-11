package repository

import (
	"fmt"
	"os"
	"strings"
)

type CookieFilter struct {
	Type      *string
	CostFrom  *float64
	CostTo    *float64
	QtyFrom   *int
	QtyTo     *int
	Format    *string
	TitleLike *string
}

type CookiesResponse struct {
	Cookies     []map[string]interface{} `json:"cookies"`
	MaxPrice    int                      `json:"max_price"`
	MaxQuantity int                      `json:"max_quantity"`
}

func convertImageURL(imgURL string) string {
	if imgURL == "" {
		return ""
	}

	// Replace internal minio URL with public URL
	if strings.Contains(imgURL, "http://minio:9000/cookies/") {
		// Extract filename
		parts := strings.Split(imgURL, "/cookies/")
		if len(parts) == 2 {
			return "/cookies/" + parts[1]
		}
	}

	if strings.HasPrefix(imgURL, "http://") || strings.HasPrefix(imgURL, "https://") {
		return imgURL
	}

	if strings.HasPrefix(imgURL, "/img/cookies/") {
		filename := strings.TrimPrefix(imgURL, "/img/cookies/")
		endpoint := os.Getenv("MINIO_ENDPOINT")
		if endpoint == "" {
			endpoint = "localhost:9000"
		}
		return fmt.Sprintf("http://%s/cookies/%s", endpoint, filename)
	}
	return imgURL
}

func (r *Repository) GetCookies(filter CookieFilter) (*CookiesResponse, error) {
	var maxPrice, maxQuantity int
	err := r.db.QueryRow("SELECT COALESCE(MAX(price)::INTEGER, 0), COALESCE(MAX(quantity)::INTEGER, 0) FROM cookies").Scan(&maxPrice, &maxQuantity)
	if err != nil {
		return nil, err
	}

	query := "SELECT id, title, price, format, type, img_url, description, ingredients, address, quantity FROM cookies WHERE 1=1"
	var args []interface{}
	argNum := 1

	if filter.Type != nil && *filter.Type != "" {
		types := strings.Split(*filter.Type, ",")
		if len(types) == 1 {
			query += fmt.Sprintf(" AND type = $%d", argNum)
			args = append(args, types[0])
			argNum++
		} else {
			placeholders := []string{}
			for _, t := range types {
				placeholders = append(placeholders, fmt.Sprintf("$%d", argNum))
				args = append(args, strings.TrimSpace(t))
				argNum++
			}
			query += fmt.Sprintf(" AND type IN (%s)", strings.Join(placeholders, ","))
		}
	}

	if filter.CostFrom != nil {
		query += fmt.Sprintf(" AND price >= $%d", argNum)
		args = append(args, *filter.CostFrom)
		argNum++
	}

	if filter.CostTo != nil {
		query += fmt.Sprintf(" AND price <= $%d", argNum)
		args = append(args, *filter.CostTo)
		argNum++
	}

	if filter.QtyFrom != nil {
		query += fmt.Sprintf(" AND quantity >= $%d", argNum)
		args = append(args, *filter.QtyFrom)
		argNum++
	}

	if filter.QtyTo != nil {
		query += fmt.Sprintf(" AND quantity <= $%d", argNum)
		args = append(args, *filter.QtyTo)
		argNum++
	}

	if filter.Format != nil {
		query += fmt.Sprintf(" AND format = $%d", argNum)
		args = append(args, *filter.Format)
		argNum++
	}

	if filter.TitleLike != nil {
		query += fmt.Sprintf(" AND title ILIKE $%d", argNum)
		args = append(args, "%"+strings.ReplaceAll(*filter.TitleLike, "%", "%%")+"%")
		argNum++
	}

	rows, err := r.db.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var cookies []map[string]interface{}
	for rows.Next() {
		var id, quantity int
		var price float64
		var title, format, cookieType, imgURL, description, ingredients, address string

		if err := rows.Scan(&id, &title, &price, &format, &cookieType, &imgURL, &description, &ingredients, &address, &quantity); err != nil {
			return nil, err
		}

		cookie := map[string]interface{}{
			"id":          id,
			"title":       title,
			"price":       int(price),
			"format":      format,
			"type":        cookieType,
			"img_url":     convertImageURL(imgURL),
			"description": description,
			"ingredients": ingredients,
			"address":     address,
			"quantity":    quantity,
		}
		cookies = append(cookies, cookie)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return &CookiesResponse{
		Cookies:     cookies,
		MaxPrice:    maxPrice,
		MaxQuantity: maxQuantity,
	}, nil
}

func (r *Repository) GetCookieByID(id int) (map[string]interface{}, error) {
	var cookieID, quantity int
	var price float64
	var title, format, cookieType, imgURL, description, ingredients, address string

	err := r.db.QueryRow("SELECT id, title, price, format, type, img_url, description, ingredients, address, quantity FROM cookies WHERE id = $1", id).
		Scan(&cookieID, &title, &price, &format, &cookieType, &imgURL, &description, &ingredients, &address, &quantity)
	if err != nil {
		return nil, err
	}

	cookie := map[string]interface{}{
		"id":          cookieID,
		"title":       title,
		"price":       int(price),
		"format":      format,
		"type":        cookieType,
		"img_url":     convertImageURL(imgURL),
		"description": description,
		"ingredients": ingredients,
		"address":     address,
		"quantity":    quantity,
	}

	return cookie, nil
}
