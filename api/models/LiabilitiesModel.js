const mongoose = require('mongoose');


const liabilitiesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "liabilities",
    },
    imageUrl: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model('liabilities', liabilitiesSchema)