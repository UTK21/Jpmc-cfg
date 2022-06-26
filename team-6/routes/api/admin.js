const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../../models/Admin');
const User = require('../../models/User');
const Request = require('../../models/Request');
const mailHelper = require('../../emailHelper');


// @route     POST api/admin/login
// @desc      Login admin
// @access    Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter password').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if admin exists
      let admin = await Admin.findOne({ email });
      if (!admin) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Return jsonwebtoken
      const payload = {
        admin: {
          id: admin.id,
        },
      };
      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     GET api/admin/users
// @desc      Get all users
// @access    Private
router.get('/users', auth, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(400).json({ msg: 'Not Authorized' });
  }

  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/admin/users/:status
// @desc      Get all users by status
// @access    Private
router.get('/users/:status', auth, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(400).json({ msg: 'Not Authorized' });
  }

  try {
    const users = await User.find({ status: req.params.status }).select(
      '-password'
    );
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/admin/users/:user_id
// @desc      Update user status
// @access    Private
router.put('/users/:user_id', auth, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(400).json({ msg: 'Not Authorized' });
  }

  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.user_id },
      { status: req.body.status },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/admin/users/:user_id
// @desc      Add comment to user
// @access    Private
router.put('/users/:user_id', auth, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(400).json({ msg: 'Not Authorized' });
  }

  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.user_id },
      { comment: req.body.comment },
      { new: true }
    );
    
     await mailHelper({
        email : user.email,
        subject : "For your recent regestration in GUSEC regisration portal",
        message : `${req.body.comment}`
       });

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/admin/requests/:request_id
// @desc      Add reply to request
// @access    Private
router.put('/requests/:request_id', auth, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(400).json({ msg: 'Not Authorized' });
  }

  try {
    const request = await Request.findOneAndUpdate(
      { _id: req.params.request_id },
      { reply: req.body.reply },
      { new: true }
    );
    res.json(request);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
