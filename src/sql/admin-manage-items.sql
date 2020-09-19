-- Gets published item info
SELECT i.id, s.id, s.name, title, (featurer IS NOT NULL) as featured
FROM items i 
    INNER JOIN sellers s ON (i.seller_id = s.id)
WHERE approver IS NOT NULL;