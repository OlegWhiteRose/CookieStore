package repository

func (r *Repository) GetStats() ([]map[string]interface{}, error) {
	rows, err := r.db.Query("SELECT number, stat_type FROM stats ORDER BY id")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var stats []map[string]interface{}
	for rows.Next() {
		var number, statType string
		
		if err := rows.Scan(&number, &statType); err != nil {
			return nil, err
		}
		
		stat := map[string]interface{}{
			"number": number,
			"type":   statType,
		}
		stats = append(stats, stat)
	}

	return stats, rows.Err()
}
