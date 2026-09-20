# Bakeryhouse Ordering Platform

A full-stack bakery website built with React and Supabase. Users can browse bakery products, create an account, sign in, and maintain their own shopping cart.

## Features

- Responsive bakery website
- Product menu with images and pricing
- User signup, login, and logout
- Authentication sessions
- User specific shopping carts
- Add to cart notifications
- Quantity increase and decrease controls
- Automatic subtotal, tax, and total calculations
- Simulated checkout
- Responsive desktop, tablet, and mobile layouts

## Tools and Technologies

- React
- JavaScript
- HTML
- CSS
- React Router
- Supabase Authentication
- Supabase PostgreSQL
- Git and GitHub
- Vite

## Database

The application uses a `cart_items` table to store each signed-in user's cart.

Row Level Security ensures that users can only access and modify their own cart items.
