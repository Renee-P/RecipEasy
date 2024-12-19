'use strict';
const dbConn = require('../config/db.config');

class AdminModel {
  static findByEmail(email, callback) {
    dbConn.query('SELECT * FROM admins WHERE email = ?', [email], callback);
  }

  static getAll(callback) {
    const query = 'SELECT * FROM admins';
    dbConn.query(query, callback);
  }

  static getById(id, callback) {
    const query = 'SELECT * FROM admins WHERE id = ?';
    dbConn.query(query, [id], callback);
  }

  static create(newAdmin, callback) {
    const query = 'INSERT INTO admins SET ?';
    dbConn.query(query, newAdmin, callback);
  }

  static delete(id, callback) {
    const query = 'DELETE FROM admins WHERE id = ?';
    dbConn.query(query, [id], callback);
  }

  static update(id, updatedAdmin, callback) {
    const query = 'UPDATE admins SET ? WHERE id = ?';
    dbConn.query(query, [updatedAdmin, id], callback);
  }
}

module.exports = AdminModel;


// 'use strict';
// const dbConn = require('../config/db.config');

// class AdminModel {
//   static findByEmail(email, callback) {
//     dbConn.query('SELECT * FROM admins WHERE email = ?', [email], callback);
//   }

//   static getAll(callback) {
//     const query = 'SELECT * FROM admins';
//     dbConn.query(query, callback);
//   }

//   static getById(id, callback) {
//     const query = 'SELECT * FROM admins WHERE id = ?';
//     dbConn.query(query, [id], callback);
//   }

//   static create(newAdmin, callback) {
//     const query = 'INSERT INTO admins SET ?';
//     dbConn.query(query, newAdmin, callback);
//   }

//   static delete(id, callback) {
//     const query = 'DELETE FROM admins WHERE id = ?';
//     dbConn.query(query, [id], callback);
//   }

//   static update(id, updatedAdmin, callback) {
//     const query = 'UPDATE admins SET ? WHERE id = ?';
//     dbConn.query(query, [updatedAdmin, id], callback);
//   }
// }

// module.exports = AdminModel;
