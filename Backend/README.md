# `/users/register` Endpoint

## Description
The `/users/register` endpoint allows new users to register by providing their details, including full name, email, and password. It validates input, hashes passwords for security, and generates a JSON Web Token (JWT) upon successful registration.

---

## Endpoint

### URL
`POST /users/register`

### Method
`POST`

---

## Request

### Headers
- **Content-Type**: `application/json`

### Body
The request body should be a JSON object containing the following fields:

| Field                | Type     | Required | Description                                |
|----------------------|----------|----------|--------------------------------------------|
| `fullname.firstname` | `string` | Yes      | First name, minimum 3 characters.          |
| `fullname.lastname`  | `string` | No       | Last name (optional).                      |
| `email`              | `string` | Yes      | User's email, must be valid and unique.    |
| `password`           | `string` | Yes      | Password, minimum 6 characters.            |

### Example
- {
 - "fullname": {
  -  "firstname": "John",
   - "lastname": "Doe"
 - },
 - "email": "john.doe@example.com",
 - "password": "securepassword123"
- }
### Response Example
- {
 - "user": {
   - "_id": "63f1e1d5c9b0a914d88e5a6e",
   - "fullname": {
    -  "firstname": "John",
    -  "lastname": "Doe"
   - },
   - "email": "john.doe@example.com"
 - },
  - "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
- }



