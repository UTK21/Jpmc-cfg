const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  is_student: {
    type: Boolean,
    default: false,
  },
  gu_alumni: {
    type: Boolean,
    default: false,
  },
  institute: {
    type: String,
    required: true,
  },
  startup_name: {
    type: String,
    required: true,
  },
  innovation: {
    type: String,
    required: true,
  },
  business_model: {
    type: String,
    required: true,
  },
  stage: {
    type: String,
    required: true,
  },
  revenue_info: {
    type: String,
    required: true,
  },
  fund_source: {
    type: String,
    required: true,
  },
  fund_req: {
    type: Number,
    required: true,
  },
  facilities: {
    type: String,
    required: true,
  },
  web_url: {
    type: String,
    required: true,
  },
  pitch_deck: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    default: 'pending',
    // pending
    // rejected
    // onboarding
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model('user', UserSchema);
