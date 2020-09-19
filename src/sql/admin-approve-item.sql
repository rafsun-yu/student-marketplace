-- Gets items which hasn't been approved yet with seller information
SELECT i.id, s.id, s.name, title, description, category, image_url, price 
FROM items i 
    INNER JOIN sellers s ON (i.seller_id = s.id)
WHERE approver IS NULL;