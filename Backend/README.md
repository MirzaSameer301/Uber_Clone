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

# `/users/login` Endpoint

## Description
The `/users/login` endpoint allows users to log in by providing their email and password. The endpoint validates the credentials, verifies the user's existence, checks the password, and returns a JSON Web Token (JWT) upon successful authentication.

---

## Endpoint

### URL
`POST /users/login`

### Method
`POST`

---

## Request

### Headers
- **Content-Type**: `application/json`

### Body
The request body should be a JSON object containing the following fields:

| Field       | Type     | Required | Description                          |
|-------------|----------|----------|--------------------------------------|
| `email`     | `string` | Yes      | User's email, must be valid.         |
| `password`  | `string` | Yes      | User's password.                     |

### Example
#### Request

- {
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

## `/users/profile` Endpoint

### Description
The `/users/profile` endpoint retrieves the authenticated user's profile information. This endpoint requires authentication via a valid token.

---

### URL
`GET /users/profile`

### Method
`GET`

---

### Request

#### Headers
- **Authorization**: `Bearer <token>`

---

### Response

#### Success Response

##### Status Code
`200 OK`

##### Body
- {
  - "_id": "63f1e1d5c9b0a914d88e5a6e",
  - "fullname": {
   -  "firstname": "John",
   -  "lastname": "Doe"
  -  },
  - "email": "john.doe@example.com"
- }

#### Failure Response

##### Status Code
`401`

##### Body
- {
  - "Unauthorized"
- }

# `/users/logout` Endpoint

## Description
The `/users/logout` endpoint logs out the authenticated user by clearing the authentication token from cookies and adding the token to the blacklist to prevent reuse.

---

## Endpoint

### URL
`POST /users/logout`

### Method
`POST`

---

## Request

### Headers
- **Authorization**: `Bearer <token>` (optional, if the token is provided in the headers)
- **Cookies**: 
  - **token**: The authentication token stored in cookies.

---

## Response

### Success Response

#### Status Code
`200 OK`

#### Body

- {
  - "message": "Logged out"
- }

# `/captains` Endpoints Documentation


# `/captains/register` Endpoint

## Description
The `/captains/register` endpoint allows captains to register by providing their full name, email, password, and vehicle details. The input is validated, the password is securely hashed, and a JSON Web Token (JWT) is generated upon successful registration.

---

## Endpoint

### URL
`POST /captains/register`

### Method
`POST`

---

## Request

### Headers
- **Content-Type**: `application/json`

### Body
The request body should be a JSON object containing the following fields:

| Field                    | Type     | Required | Description                                |
|--------------------------|----------|----------|--------------------------------------------|
| `fullname.firstname`     | `string` | Yes      | Captain's first name (minimum 3 characters). |
| `fullname.lastname`      | `string` | No       | Captain's last name (optional).            |
| `email`                  | `string` | Yes      | Captain's email, must be valid and unique. |
| `password`               | `string` | Yes      | Password, minimum 6 characters.            |
| `vehicle.color`          | `string` | Yes      | Vehicle color.                             |
| `vehicle.plate`          | `string` | Yes      | Vehicle plate number.                      |
| `vehicle.capacity`       | `number` | Yes      | Vehicle seating capacity.                  |
| `vehicle.vehicletype`    | `string` | Yes      | Type of vehicle (e.g., car, bike).         |

### Example
#### Request

- {
  - "fullname": {
    - "firstname": "Jane",
    - "lastname": "Doe"
  - },
  - "email": "jane.doe@example.com",
  - "password": "securepassword123",
  - "vehicle": {
    - "color": "Red",
    - "plate": "ABC123",
    - "capacity": 4,
    - "vehicletype": "Car"
  - }
- }

### Success Response
- {
  - "captain": {
    - "_id": "63f1e1d5c9b0a914d88e5a6e",
    - "fullname": {
      - "firstname": "Jane",
      - "lastname": "Doe"
    - },
    - "email": "jane.doe@example.com",
    - "vehicle": {
      - "color": "Red",
      - "plate": "ABC123",
      - "capacity": 4,
      - "vehicletype": "Car"
    - }
  - },
  - "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
- }

## `/captains/login` Endpoint

### Description
The `/captains/login` endpoint allows captains to log in by providing their email and password. Upon successful authentication, a JSON Web Token (JWT) is generated, and the token is sent as a cookie.

---

### URL
`POST /captains/login`

### Method
`POST`

---

### Request

#### Headers
- **Content-Type**: `application/json`

#### Body
The request body should be a JSON object containing the following fields:

| Field       | Type     | Required | Description                          |
|-------------|----------|----------|--------------------------------------|
| `email`     | `string` | Yes      | Captain's email, must be valid.      |
| `password`  | `string` | Yes      | Captain's password.                  |

#### Example

- {
  - "email": "jane.doe@example.com",
  - "password": "securepassword123"
- }

#### Success Response
- {
  - "captain": {
    - "_id": "63f1e1d5c9b0a914d88e5a6e",
    - "fullname": {
      - "firstname": "Jane",
      - "lastname": "Doe"
    - },
    - "email": "jane.doe@example.com",
    - "vehicle": {
      - "color": "Red",
      - "plate": "ABC123",
      - "capacity": 4,
      - "vehicletype": "Car"
    - }
  - },
  - "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
- }
#### Failure Response
- {
  - "message": "Invalid Email or Password"
- }

# `/captains/profile` Endpoint

## Description
The `/captains/profile` endpoint retrieves the authenticated captain's profile information. This endpoint requires a valid JSON Web Token (JWT) for authentication.

---

## Endpoint

### URL
`GET /captains/profile`

### Method
`GET`

---

## Request

### Headers
- **Authorization**: `Bearer <token>` (or the `token` cookie if authentication is managed via cookies).

---

## Response

### Success Response

#### Status Code
`200 OK`

#### Body
- {
  - "captain": {
    - "_id": "63f1e1d5c9b0a914d88e5a6e",
    - "fullname": {
      - "firstname": "Jane",
      - "lastname": "Doe"
    - },
    - "email": "jane.doe@example.com",
    - "vehicle": {
      - "color": "Red",
      - "plate": "ABC123",
      - "capacity": 4,
      - "vehicletype": "Car"
    - }
  - }
- }

#### Error Response

- {
  - "message": "Unauthorized"
- }

# `/captains/logout` Endpoint

## Description
The `/captains/logout` endpoint logs out the authenticated captain by clearing the authentication token from cookies and blacklisting the token to prevent reuse.

---

## Endpoint

### URL
`POST /captains/logout`

### Method
`POST`

---

## Request

### Headers
- **Authorization**: `Bearer <token>` (if the token is not sent as a cookie).

---

## Response

### Success Response

#### Status Code
`200 OK`

#### Body

- {
  - "message": "Logout successfully"
- }

#### Error Response

- {
  - "message": "Unauthorized"
- }



