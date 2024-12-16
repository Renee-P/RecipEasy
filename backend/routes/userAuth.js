const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const user = {
  email: "user@example.com",
  password: "$2b$10$3q/O4W0ZB4S5JlZTdf2h4eES3TeRm91xRhj7FcDswHfQQ7.PvqfEC" // bcrypt hash of "userpassword"
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'User login successful' });
  });
});

module.exports = router;
