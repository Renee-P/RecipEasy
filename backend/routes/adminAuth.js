const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const admin = {
  username: "admin",
  password: "$2b$10$U0D1.Q5a5X7oPmrHOhZZR3ipFxFiPtZAf5m0YMYT68X.RbuX3Y82u"
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== admin.username) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  bcrypt.compare(password, admin.password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Admin login successful' });
  });
});

module.exports = router;
