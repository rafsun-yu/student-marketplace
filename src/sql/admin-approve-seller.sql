-- Gets items which hasn't been approved yet with seller information
SELECT id, name, phone_no, address
FROM sellers
WHERE approver IS NULL;