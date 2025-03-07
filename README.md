# CareConnect

CareConnect is a medical appointment booking platform that enables users to schedule doctor appointments seamlessly. It also features a special AI-powered chatbot to assist users with their medical queries.

## Features

- **Doctor Appointments**: Book, manage, and track medical appointments.
- **AI Chatbot**: Get instant medical assistance and guidance.
- **Secure Authentication**: Admin, doctor, and patient authentication.
- **Admin Dashboard**: Manage users, doctors, and appointments.
- **File Uploads**: Securely upload medical reports and prescriptions.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS, Bootstrap

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB

### Steps to Run Locally

1. **Clone the Repository**
   ```sh
   git clone https://github.com/vedantulhe12/CareConnect.git
   cd CareConnect
   ```

2. **Install Dependencies**
   ```sh
   npm install
   cd frontend
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. **Run the Backend**
   ```sh
   npm run server
   ```

5. **Run the Frontend**
   ```sh
   cd frontend
   npm start
   ```

## API Endpoints

| Endpoint              | Method | Description               |
|----------------------|--------|---------------------------|
| `/api/v1/doctors`   | GET    | Fetch all doctors        |
| `/api/v1/appts`     | POST   | Book an appointment      |
| `/api/v1/patients`  | GET    | Fetch patient details    |
| `/api/v1/upload`    | POST   | Upload medical reports   |

## Contributing

Contributions are welcome! Fork the repo and submit a pull request.

## License

MIT License

## Contact

