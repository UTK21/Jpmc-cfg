const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const multer = require('multer');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (
    file.mimetype.split('/')[1] === 'pdf' ||
    file.mimetype.split('/')[1] === 'ppt'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Not a PDF/PPT File!!'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
  '/',
  upload.single('pitch'),
  // [
  //   check('name', 'Please enter your name').not().isEmpty(),
  //   check('mobile', 'Please enter your mobile number').not().isEmpty(),
  //   check('address', 'Please enter your address').not().isEmpty(),
  //   check('institute', 'Please enter your institute').not().isEmpty(),
  //   check('startup_name', 'Please include a valid startup name')
  //     .not()
  //     .isEmpty(),
  //   check('innovation', 'Please describe the innovation of the startup')
  //     .not()
  //     .isEmpty(),
  //   check('business_model', 'Please include a valid business model')
  //     .not()
  //     .isEmpty(),
  //   check('stage', 'Please include the current stage of your startup')
  //     .not()
  //     .isEmpty(),
  //   check('revenue_info', 'Please include a valid business model')
  //     .not()
  //     .isEmpty(),
  //   check('fund_source', 'Please include a valid fund source').not().isEmpty(),
  //   check('fund_req', 'Please include a valid fund requirement amount')
  //     .not()
  //     .isEmpty(),
  //   check('facilities', 'Please include a facilities required by startup')
  //     .not()
  //     .isEmpty(),
  //   check('web_url', 'Please include a valid URL for pitch deck')
  //     .not()
  //     .isEmpty(),
  //   check('email', 'Please include a valid email').isEmail(),
  //   check(
  //     'password',
  //     'Please enter a password with 6 or more characters'
  //   ).isLength({ min: 6 }),
  // ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const {
      name,
      mobile,
      email,
      address,
      is_student,
      gu_alumni,
      institute,
      startup_name,
      innovation,
      business_model,
      stage,
      revenue_info,
      fund_source,
      fund_req,
      facilities,
      web_url,
      password,
    } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user && user.status !== 'rejected') {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      if (
        user &&
        user.status === 'rejected' &&
        Date.now() - user.date < 2592000000
      ) {
        return res.status(400).json({
          errors: [{ msg: 'Rejected startup can apply only after 30 days' }],
        });
      }

      user = new User({
        name,
        mobile,
        email,
        address,
        is_student,
        gu_alumni,
        institute,
        startup_name,
        innovation,
        business_model,
        stage,
        revenue_info,
        fund_source,
        fund_req,
        facilities,
        web_url,
        password,
        pitch_deck: req.file.filename,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
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

module.exports = router;
