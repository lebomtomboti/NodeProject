import { connection as db } from "../config/index.js";
import { hash, compare } from 'bcrypt';
import { createToken } from  "../middleware/AuthenticateUser.js";

class Users {
  async fetchUsers(req, res) {
    const qry = `
      SELECT userID,
      firstName,
      lastName,
      userAge,
      gender,
      emailAdd,
      userRole,
      userProfile
      FROM Users;
    `;
    try {
      const results = await db.query(qry);
      res.json({
        status: res.statusCode,
        results
      });
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        msg: 'Error fetching users'
      });
    }
  }

  async fetchUser(req, res) {
    const qry = `
      SELECT userID,
      firstName,
      lastName,
      userAge,
      gender,
      emailAdd,
      userRole,
      userProfile
      FROM Users
      WHERE userID = ?;
    `;
    try {
      const result = await db.query(qry, [req.params.id]);
      res.json({
        status: res.statusCode,
        result: result[0]
      });
    } catch (err) {
      res.status(404).json({
        status: res.statusCode,
        msg: 'User not found'
      });
    }
  }

  async createUser(req, res) {
    let data = req.body;
    data.userPwd = await hash(data.userPwd, 10);
    let user = {
      emailAdd: data.emailAdd,
      userPwd: data.userPwd
    };
    const qry = `
      INSERT INTO Users
      SET ?;
    `;
    try {
      const result = await db.query(qry, [data]);
      const token = createToken(user);
      res.json({
        status: res.statusCode,
        token,
        msg: 'You\'re registered'
      });
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        msg: 'Error creating user'
      });
    }
  }

  async updateUser(req, res) {
    const data = req.body;
    if (data.userPwd) {
      data.userPwd = await hash(data.userPwd, 10);
    }
    const qry = `
      UPDATE Users
      SET ?
      WHERE userID = ?;
    `;
    try {
      const result = await db.query(qry, [data, req.params.id]);
      res.json({
        status: res.statusCode,
        msg: "The user information is updated."
      });
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        msg: 'Error updating user'
      });
    }
  }

  async deleteUser(req, res) {
    const qry = `
      DELETE FROM Users
      WHERE userID = ?;
    `;
    try {
      const result = await db.query(qry, [req.params.id]);
      res.json({
        status: res.statusCode,
        msg: "The user information has been removed."
      });
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        msg: 'Error deleting user'
      });
    }
  }

  async login(req, res) {
    const { emailAdd, userPwd } = req.body;
    const qry = `
      SELECT userID,
      firstName,
      lastName,
      userAge,
      gender,
      emailAdd,
      userPwd,
      userRole
      FROM Users
      WHERE emailAdd = ?;
    `;
    try {
      const result = await db.query(qry, [emailAdd]);
      if (!result.length) {
        res.status(401).json({
          status: res.statusCode,
          msg: "You provided a wrong email address."
        });
      } else {
        const validPass = await compare(userPwd, result[0].userPwd);
        if (validPass) {
          const token = createToken({
            emailAdd,
            userPwd
          });
          res.json({
            status: res.statusCode,
            msg: "You're logged in",
            token,
            result: result[0]
          });
        } else {
          res.status(401).json({
            status: res.statusCode,
            msg: "Please provide the correct password."
          });
        }
      }
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        msg: 'Error logging in'
      });
    }
  }
}

export {
  Users
}