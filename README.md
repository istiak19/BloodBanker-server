# 🩸 BloodBanker - Backend  

**BloodBanker** is an online platform designed to connect blood donors and recipients, enabling seamless and efficient blood donation management. It allows users to register as donors, browse available donation campaigns, and get in touch with nearby blood banks or individuals in need. The platform also offers features like user profiles, donation tracking, and volunteer opportunities. By making blood donation more accessible, organized, and impactful for communities, BloodBanker not only saves lives but also fosters a spirit of community support, encourages volunteerism, and strengthens social responsibility across society.

## 📖 Table of Contents  

- [Features](#-features)  
- [Installation](#-installation)  
- [Configuration](#-configuration)  
- [Usage](#-usage)  
- [API Endpoints](#-api-endpoints)  
- [Dependencies](#-dependencies)  
- [Troubleshooting](#-troubleshooting)  
- [Contributing](#-contributing)  
- [License](#-license)  

## 📌 Key Features 

- **User Roles:** Manage donor, volunteer, and admin access securely.  
- **Donation Management:** Schedule and track blood donations effortlessly.  
- **Localized Search:** Find donors and recipients by district and upazila.  
- **Secure Authentication:** Safeguard user data with JWT authentication.  
- **Admin Dashboard:**  Monitor real-time user and donation statistics.  
- **Blog Section:** Publish updates, health tips, and inspiring stories.  
- **Donation Tracking:** Keep donation statuses updated and transparent 
- **Payment Integration:** Enable Stripe-powered donations for campaigns.  
- **Responsive Design:** Enjoy a smooth experience on any device.  
- **Community Impact:** Organize events and promote blood donation awareness.  

## ⚙️ Installation  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/istiak19/BloodBanker-server
   cd bloodbanker-backend
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Set up environment variables** (See [Configuration](#-configuration))  

4. **Start the server**  
   ```sh
   npm start
   ```

## 🔧 Configuration  

Create a `.env` file in the root directory and add the following environment variables:  

```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## ▶️ Usage  

- Run the server:  
  ```sh
  npm start
  ```
- The backend will be available at: `http://localhost:5000` (default port)  

## 📌 API Endpoints  

| Method | Endpoint            | Description                            |
|--------|---------------------|----------------------------------------|
| POST   | `/auth/signup`      | Register a new user                   |
| POST   | `/auth/login`       | Authenticate user and return JWT      |
| GET    | `/donors`           | Get a list of available donors        |
| POST   | `/donation/schedule`| Schedule a blood donation             |
| GET    | `/donation/status`  | Check donation status                 |
| POST   | `/payments/donate`  | Process a payment via Stripe          |

_(More endpoints can be documented based on your API structure.)_  

## 📦 Dependencies  

The backend relies on the following packages:  

- **Express** – Web framework for Node.js  
- **MongoDB** – NoSQL database  
- **JWT (jsonwebtoken)** – Authentication & authorization  
- **Dotenv** – Load environment variables  
- **CORS** – Enable Cross-Origin Resource Sharing  
- **Stripe** – Payment processing  

## 🛠 Troubleshooting  

- If **MongoDB connection fails**, ensure `MONGO_URI` is correctly set in `.env`.  
- If **CORS issues occur**, configure allowed origins in your Express setup.  
- If **JWT authentication fails**, verify that `JWT_SECRET` is correctly set.