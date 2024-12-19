'use strict';

module.exports = (app) => {
  const adminController = require('../controllers/admin.controller');

  app.post('/admin/login', adminController.login);

  // GET all admins
  app.get("/admin", adminController.getAllAdmins);

  // GET a single admin by ID
  app.get("/admin/:id", adminController.getAdminById);

  // POST a new admin
  app.post("/admin", adminController.addAdmin);

  // DELETE an admin by ID
  app.delete("/admin/:id", adminController.deleteAdmin);

  // PUT (or PATCH) to update an admin by ID
  app.put("/admin/:id", adminController.updateAdmin);
};
