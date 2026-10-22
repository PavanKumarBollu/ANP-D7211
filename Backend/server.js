const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Allow your local frontend to communicate with the backend
app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

// Parse incoming JSON data
app.use(express.json());

// Dummy login credentials
const dummyUser = {
  email: "student@gmail.com",
  password: "123456",
};

// Health-check endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Dummy login backend is running",
  });
});

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email.trim() ||
    !password
  ) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  // Check credentials
  if (
    email.trim().toLowerCase() === dummyUser.email &&
    password === dummyUser.password
  ) {
    return res.status(200).json({
      success: true,
      message: "Login successful!",
      user: {
        email: dummyUser.email,
      },
    });
  }

  // Incorrect credentials
  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// Start the backend server
app.listen(PORT, "127.0.0.1", () => {
  console.log("----------------------------------");
  console.log("Dummy Login Backend Started");
  console.log(`Server URL: http://127.0.0.1:${PORT}`);
  console.log(`Login API:  http://127.0.0.1:${PORT}/login`);
  console.log("----------------------------------");
});
