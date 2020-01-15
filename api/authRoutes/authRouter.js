const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('./authModel')

router.post('/register', (req, res) => {
  let chef = req.body;
  const hash = bcrypt.hashSync(chef.password, 10); // 2 ^ n
  chef.password = hash;

  db.add(chef)
    .then(saved => {
      res.status(201).json(saved);
      console.log
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});

router.post('/login',  (req, res) => {
  const { username, password } = req.body;

  db.findByUserNameLogin(username)
      .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = signToken(user);
              res.status(200).json({ userId: user.id, username: user.username, token });
          } else {
              res.status(401).json({ error: 'Invalid credentials. Check the username and password to ensure they are correct' });
          }
      })
      .catch(error => {
              res.status(500).json(error);
              console.log(error, 'error')
            });
});

function signToken(user) {
  const payload = {
    username: user.username,
    
  };

  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options); 
}

module.exports = router;
