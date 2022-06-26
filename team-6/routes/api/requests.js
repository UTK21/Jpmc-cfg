const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Request = require('../../models/Request');

// @route     GET api/requests/:user_id
// @desc      Get all requests by user ID
// @access    Private
router.get('/:user_id', auth, async (req, res) => {
  if (req.user.id !== req.params.user_id) {
    return res.status(400).json({ errors: [{ msg: 'Not Authorized' }] });
  }

  try {
    const requests = await Request.find({ user: req.params.user_id }).sort({
      date: -1,
    });

    requests.splice(3);
    res.json(requests);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Request not found' });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/requests
// @desc      Create a Request
// @access    Private
router.post(
  '/',
  [auth, [check('query', 'Query is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newRequest = new Request({
        query: req.body.query,
        user: req.user.id,
      });

      const request = await newRequest.save();

      res.json(request);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
