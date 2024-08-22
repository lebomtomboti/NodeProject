import "dotenv/config";
import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

const auth = {
  createToken(user) {
    return sign(
      {
        userId: user.id, // Store a unique identifier, not the password
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
  },

  verifyAToken(req, res, next) {
    const token = req?.headers["Authorization"];
    if (token) {
      try {
        verify(token, process.env.SECRET_KEY);
        next();
      } catch (error) {
        res.status(401).json({
          status: 401,
          msg: "Invalid token",
        });
      }
    } else {
      res.status(401).json({
        status: 401,
        msg: "Please login",
      });
    }
  },
};

export default auth;