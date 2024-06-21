# API Documentation

## Admin API

### 1. Create Admin
- **Endpoint**: `/admin`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "admin_id": "string",
        "password": "string"
    }
    ```
- **Response**:
    ```json
    {
        "message": "Admin created successfully",
        "admin_id": "string"
    }
    ```

### 2. Get Admin
- **Endpoint**: `/admin/:admin_id`
- **Method**: GET
- **Response**:
    ```json
    {
        "admin_id": "string",
        "password": "string"
    }
    ```

## User API

### 1. Create User
- **Endpoint**: `/user`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "user_email": "string",
        "user_location": "string",
        "user_info": {},
        "password": "string",
        "vehicle_info": ["string"]
    }
    ```
- **Response**:
    ```json
    {
        "message": "User created successfully",
        "user_id": "string"
    }
    ```

### 2. Get User
- **Endpoint**: `/user/:user_id`
- **Method**: GET
- **Response**:
    ```json
    {
        "user_email": "string",
        "user_id": "string",
        "user_location": "string",
        "user_info": {},
        "password": "string",
        "vehicle_info": ["string"]
    }
    ```

## Deal API

### 1. Create Deal
- **Endpoint**: `/deal`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "car_id": "string",
        "deal_info": {}
    }
    ```
- **Response**:
    ```json
    {
        "message": "Deal created successfully",
        "deal_id": "string"
    }
    ```

### 2. Get Deal
- **Endpoint**: `/deal/:deal_id`
- **Method**: GET
- **Response**:
    ```json
    {
        "deal_id": "string",
        "car_id": "string",
        "deal_info": {}
    }
    ```

## Cars API

### 1. Create Car
- **Endpoint**: `/cars`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "type": "string",
        "name": "string",
        "model": "string",
        "car_info": {}
    }
    ```
- **Response**:
    ```json
    {
        "message": "Car created successfully",
        "car_id": "string"
    }
    ```

### 2. Get Car
- **Endpoint**: `/cars/:car_id`
- **Method**: GET
- **Response**:
    ```json
    {
        "car_id": "string",
        "type": "string",
        "name": "string",
        "model": "string",
        "car_info": {}
    }
    ```

## Sold Vehicles API

### 1. Create Sold Vehicle
- **Endpoint**: `/sold_vehicle`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "car_id": "string",
        "vehicle_info": {}
    }
    ```
- **Response**:
    ```json
    {
        "message": "Sold vehicle recorded successfully",
        "vehicle_id": "string"
    }
    ```

### 2. Get Sold Vehicle
- **Endpoint**: `/sold_vehicle/:vehicle_id`
- **Method**: GET
- **Response**:
    ```json
    {
        "vehicle_id": "string",
        "car_id": "string",
        "vehicle_info": {}
    }
    ```

## Dealership API

### 1. Create Dealership
- **Endpoint**: `/dealership`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "dealership_email": "string",
        "dealership_name": "string",
        "dealership_location": "string",
        "password": "string",
        "dealership_info": {},
        "cars": ["string"],
        "deals": ["string"],
        "sold_vehicles": ["string"]
    }
    ```
- **Response**:
    ```json
    {
        "message": "Dealership created successfully",
        "dealership_id": "string"
    }
    ```

### 2. Get Dealership
- **Endpoint**: `/dealership/:dealership_id`
- **Method**: GET
- **Response**:
    ```json
    {
        "dealership_email": "string",
        "dealership_id": "string",
        "dealership_name": "string",
        "dealership_location": "string",
        "dealership_info": {},
        "cars": ["string"],
        "deals": ["string"],
        "sold_vehicles": ["string"]
    }
    ```
