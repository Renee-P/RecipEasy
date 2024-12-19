'use strict';
const crypto = require("crypto");
const AdminModel = require("../models/admin.model");

exports.login = (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  AdminModel.findByEmail(email, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error connecting to the database." });
    }

    if (results.length > 0) {
      const admin = results[0];

      if (admin.password === hashedPassword) {
        res.status(200).json({ message: "Login successful!" });
      } else {
        res.status(401).json({ message: "Invalid password." });
      }
    } else {
      res.status(404).json({ message: "Admin not found." });
    }
  });
};

// Get all admins
exports.getAllAdmins = (req, res) => {
  AdminModel.getAll((err, admins) => {
    if (err) {
      res.status(500).json({ message: "Error retrieving admins" });
    } else {
      res.status(200).json(admins);
    }
  });
};

// Get an admin by ID
exports.getAdminById = (req, res) => {
  const { id } = req.params;
  AdminModel.getById(id, (err, admin) => {
    if (err) {
      res.status(500).send({ message: "Error retrieving admin" });
    } else if (!admin) {
      res.status(404).send({ message: "Admin not found" });
    } else {
      res.status(200).json(admin);
    }
  });
};

//Add a new admin
exports.addAdmin = (req, res) => {
  const newAdmin = req.body;

  if (!newAdmin.email || !newAdmin.password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  const hashedPassword = crypto.createHash("sha256").update(newAdmin.password).digest("hex");
  newAdmin.password = hashedPassword;

  AdminModel.create(newAdmin, (err, result) => {
    if (err) {
      res.status(500).send({ message: "Error adding admin", error: err });
    } else {
      res.status(201).json({ id: result.insertId, ...newAdmin });
    }
  });
};

// Delete an admin by ID
exports.deleteAdmin = (req, res) => {
  const { id } = req.params;
  AdminModel.delete(id, (err) => {
    if (err) {
      res.status(500).send({ message: "Error deleting admin" });
    } else {
      res.status(200).send({ message: "Admin deleted successfully" });
    }
  });
};

exports.updateAdmin = (req, res) => {
  const { id } = req.params;
  const updatedAdmin = req.body;

  if (updatedAdmin.password) {
    updatedAdmin.password = crypto.createHash("sha256").update(updatedAdmin.password).digest("hex");
  }

  AdminModel.update(id, updatedAdmin, (err) => {
    if (err) {
      res.status(500).send({ message: "Error updating admin" });
    } else {
      res.status(200).send({ message: "Admin updated successfully" });
    }
  });
};




