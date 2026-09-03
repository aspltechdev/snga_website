const bcrypt = require("bcryptjs");

const prisma = require("../config/db");
const generateToken = require("../utils/generateToken");

// ==========================================
// LOGIN
// POST /api/auth/login
// ==========================================

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ------------------------------------------
    // Validate input
    // ------------------------------------------

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // ------------------------------------------
    // Find user
    // ------------------------------------------

    const normalizedEmail = email.toLowerCase().trim();

    const user = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    // ------------------------------------------
    // User not found
    // ------------------------------------------

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // ------------------------------------------
    // Check account status
    // ------------------------------------------

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account is inactive",
      });
    }

    // ------------------------------------------
    // Check password
    // ------------------------------------------

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // ------------------------------------------
    // Generate JWT
    // ------------------------------------------

    const token = generateToken(user);

    // ------------------------------------------
    // Login successful
    // ------------------------------------------

    return res.status(200).json({
      success: true,
      message: "Login successful",

      token,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// ==========================================
// GET CURRENT USER
// GET /api/auth/me
// ==========================================

const getMe = async (req, res) => {
  try {
    // ------------------------------------------
    // User ID comes from auth middleware
    // ------------------------------------------

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },

      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    // ------------------------------------------
    // User not found
    // ------------------------------------------

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // ------------------------------------------
    // Check account status
    // ------------------------------------------

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account is inactive",
      });
    }

    // ------------------------------------------
    // Return user
    // ------------------------------------------

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Get current user error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// ==========================================
// LOGOUT
// POST /api/auth/logout
// ==========================================

const logout = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  login,
  getMe,
  logout,
};