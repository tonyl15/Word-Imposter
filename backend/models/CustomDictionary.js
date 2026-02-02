const mongoose = require('mongoose');

const customDictionarySchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dict_name: {
    type: String,
    required: [true, 'Dictionary name is required'],
    trim: true,
    maxlength: [50, 'Dictionary name cannot exceed 50 characters']
  },
  dict_words: [{
    word: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true
    }
  }],
  dict_created_at: {
    type: Date,
    default: Date.now
  },
  dict_total_words: {
    type: Number,
    default: 0
  }
});

// Update dict_total_words before saving
customDictionarySchema.pre('save', function(next) {
  this.dict_total_words = this.dict_words.length;
  next();
});

module.exports = mongoose.model('CustomDictionary', customDictionarySchema);
