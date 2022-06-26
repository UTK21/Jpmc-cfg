const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const mailHelper = require('../../emailHelper');
const auth = require('../../middleware/auth');
const Startup = require('../../models/Startup');


// @route     GET api/startups/me
// @desc      Get current user's startup data
// @access    Private
router.get('/me', auth, async (req, res) => {
  try {
    const startup = await Startup.findOne({ user: req.user._id });
    if (!startup) {
      return res.status(400).json({ msg: 'There is no startup for this user' });
    }
    res.json(startup);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/startups
// @desc      Create startup data
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('team_info', 'Team Info is required').not().isEmpty(),
      check('founder', 'Founder name is required').not().isEmpty(),
      check('num_members', 'Number of people in team is required')
        .not()
        .isEmpty(),
      check('incorporation_type', 'Incorporation type is required')
        .not()
        .isEmpty(),
      check('entity', 'Entity Name is required').not().isEmpty(),
      check('website', 'Website link is required').not().isEmpty(),
      check('founder_address', 'Founder Address is required').not().isEmpty(),
      check('founder_email', 'Enter a valid email for founder').isEmail(),
      check('pan', 'PAN Number is required').not().isEmpty(),
      check('bank_name', 'Bank Name is required').not().isEmpty(),
      check('account_no', 'Account Number is required').not().isEmpty(),
      check('ifsc_code', 'IFSC Code is required').not().isEmpty(),
      check('freq', 'Frequency of meetings is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.user.status !== 'onboarding') {
      return res
        .status(400)
        .json({
          errors: [{ msg: 'Not eligible to fill the onboarding form' }],
        });
    }

    const {
      team_info,
      founder,
      cofounders,
      num_members,
      incorporation_type,
      entity,
      partners,
      website,
      social,
      founder_address,
      founder_mobile,
      founder_email,
      pan,
      bank_name,
      account_no,
      ifsc_code,
      freq,
    } = req.body;

    // Build startup object
    const startupFields = {
      team_info,
      founder,
      num_members,
      incorporation_type,
      entity,
      website,
      social,
      founder_address,
      founder_mobile,
      founder_email,
      pan,
      bank_name,
      account_no,
      ifsc_code,
      freq,
    };

    if (cofounders) startupFields.cofounders = cofounders;
    if (partners) startupFields.partners = partners;

    // Build social object
    startupFields.social = {};
    if (social.youtube) startupFields.social.youtube = social.youtube;
    if (social.twitter) startupFields.social.twitter = social.twitter;
    if (social.facebook) startupFields.social.facebook = social.facebook;
    if (social.linkedin) startupFields.social.linkedin = social.linkedin;
    if (social.instagram) startupFields.social.instagram = social.instagram;

    try {
      let startup = await Startup.findOne({ user: req.user.id });
      if (startup) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Startup already exists' }] });
      }

      startup = new Startup(startupFields);
      await startup.save();

      await mailHelper({
        email : founder_email,
        subject : "For your recent submittion of onboarding form",
        message :" We are Highly oblieged to let you know that your startup funding request has reached the furthur phases, we will soon contact you for furthur meetings",
       });

       
      res.send(startup);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
