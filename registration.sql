CREATE TABLE IF NOT EXISTS registration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    degree TEXT NOT NULL,
    department TEXT NOT NULL,
    shift INTEGER NOT NULL AUTO_INCREMENT,
    aadhaar TEXT NOT NULL,
    account_no TEXT NOT NULL AUTO_INCREMENT,
    ifsc_code TEXT NOT NULL,
    parent_account_no TEXT NOT NULL AUTO_INCREMENT,
    parent_ifsc_code TEXT NOT NULL,
    whatsapp_no TEXT NOT NULL AUTO_INCREMENT,
    distance INTEGER NOT NULL,
    signature TEXT NOT NULL
);

INSERT INTO registration (name, degree, department, shift, aadhaar, account_no, ifsc_code, parent_account_no, parent_ifsc_code, whatsapp_no, distance, signature)
VALUES ('John Doe', 'Bachelor of Science', 'Computer Science', 1, '123456789012', '1234567890', 'IFSC1234', '0987654321', 'IFSC5678', '1234567890', 10.5, 'path/to/signature.jpg');
