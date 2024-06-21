# This is List of HTTP Request to try on My API : )
`GET` and `POST` requests for each entity (`Admin`, `User`, `Car`, `Deal`, `Dealership`, `SoldVehicle`) 
```markdown
# REST API Endpoints

## Admin

### Create Admin
- **Method:** POST
- **URL:** `http://localhost:3000/admin`
- **Body (raw JSON):**
  ```json
  {
      "admin_id": "admin1",
      "password": "password123"
  }
  ```

### Get All Admins
- **Method:** GET
- **URL:** `http://localhost:3000/admin`

---

## User

### Create User
- **Method:** POST
- **URL:** `http://localhost:3000/user`
- **Body (raw JSON):**
  ```json
  {
      "user_email": "user@example.com",
      "user_location": "New York",
      "user_info": {
          "name": "John Doe",
          "age": 30
      },
      "password": "userpassword",
      "vehicle_info": []
  }
  ```

### Get All Users
- **Method:** GET
- **URL:** `http://localhost:3000/user`

---

## Car

### Create Car
- **Method:** POST
- **URL:** `http://localhost:3000/car`
- **Body (raw JSON):**
  ```json
  {
      "type": "SUV",
      "name": "Toyota RAV4",
      "model": "2023",
      "car_info": {
          "color": "blue",
          "mileage": 5000
      }
  }
  ```

### Get All Cars
- **Method:** GET
- **URL:** `http://localhost:3000/car`

---

## Deal

### Create Deal
- **Method:** POST
- **URL:** `http://localhost:3000/deal`
- **Body (raw JSON):**
  ```json
  {
      "car_id": "car1",
      "deal_info": {
          "price": 25000,
          "discount": 10
      }
  }
  ```

### Get All Deals
- **Method:** GET
- **URL:** `http://localhost:3000/deal`

---

## Dealership

### Create Dealership
- **Method:** POST
- **URL:** `http://localhost:3000/dealership`
- **Body (raw JSON):**
  ```json
  {
      "dealership_email": "dealer@example.com",
      "dealership_id": "dealer1",
      "dealership_name": "ABC Motors",
      "dealership_location": "Los Angeles",
      "password": "dealerpassword",
      "dealership_info": {
          "rating": 4.5,
          "sales_volume": 100
      },
      "cars": [],
      "deals": [],
      "sold_vehicles": []
  }
  ```

### Get All Dealerships
- **Method:** GET
- **URL:** `http://localhost:3000/dealership`

---

## SoldVehicle

### Create Sold Vehicle
- **Method:** POST
- **URL:** `http://localhost:3000/soldvehicle`
- **Body (raw JSON):**
  ```json
  {
      "vehicle_id": "vehicle1",
      "car_id": "car1",
      "vehicle_info": {
          "buyer_name": "Jane Smith",
          "sale_price": 23000
      }
  }
  ```

### Get All Sold Vehicles
- **Method:** GET
- **URL:** `http://localhost:3000/soldvehicle`

# Thankyou 🤌💌
