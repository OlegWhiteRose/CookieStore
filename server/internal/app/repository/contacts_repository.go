package repository

func (r *Repository) GetContacts() (map[string]interface{}, error) {
	var phone, email, address, inn string
	
	err := r.db.QueryRow("SELECT phone, email, address, inn FROM contacts LIMIT 1").
		Scan(&phone, &email, &address, &inn)
	if err != nil {
		return nil, err
	}
	
	contacts := map[string]interface{}{
		"phone":   phone,
		"email":   email,
		"address": address,
		"inn":     inn,
	}
	
	return contacts, nil
}
