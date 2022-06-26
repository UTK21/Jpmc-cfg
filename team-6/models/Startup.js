const mongoose = require('mongoose');

const StartupSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  team_info: {
    type: String,
    required: true,
  },
  founder: {
    type: String,
    required: true,
  },
  cofounders: [String],
  num_members: {
    type: Number,
    required: true,
  },
  incorporation_type: {
    type: String,
    required: true,
  },
  entity: {
    type: String,
    required: true,
  },
  partners: [String],
  website: {
    type: String,
    required: true,
  },
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  founder_address: {
    type: String,
    required: true,
  },
  founder_mobile: {
    type: String,
    required: true,
  },
  founder_email: {
    type: String,
    required: true,
    unique: true,
  },
  pan: {
    type: Number,
    required: true,
  },
  bank_name: {
    type: String,
    required: true,
  },
  account_no: {
    type: Number,
    required: true,
  },
  ifsc_code: {
    type: String,
    required: true,
  },
  freq: {
    type: String,
    required: true,
  },
  // cdc: [
  //   {
  //     transaction_id: {
  //       type: String,
  //       required: true,
  //     },
  //     date: {
  //       type: Date,
  //       default: Date.now(),
  //     },
  //     amount: {
  //       type: Number,
  //       required: true,
  //     },
  //   },
  // ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Startup = mongoose.model('startup', StartupSchema);
