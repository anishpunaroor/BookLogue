# BookLogue

BookLogue is a full-stack web application I created to post and review books that I have read. This application was built using the MERN stack and Redux with a Paypal payment gateway (powered by Braintree).

## Features

- Functional shopping cart
- Product reviews and ratings
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- Credit card integration with Paypal

## Technologies used

- ReactJS
- NodeJS
- Express
- MongoDB
- Redux

## To run locally on your machine

### Clone the repo to your machine

```
git clone https://github.com/anishpunaroor/BookLogue.git
cd Booksify
```

### Env variables setup

Create an .env file in the Booksify backend directory and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = jwt secret
MERCHANT_ID = braintree merchant id
PUBLIC_KEY = braintree public key
PRIVATE_KEY = braintree private key
```

### Install Dependencies (frontend & backend)

```
cd backend
npm install
cd ..
cd frontend
yarn install
```

# Running the application

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```