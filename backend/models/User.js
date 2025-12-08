const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['backer', 'creator', 'admin'],
    default: 'backer'
  },
  profile: {
    bio: String,
    avatar: String,
    location: String,
    website: String,
    socialLinks: {
      twitter: String,
      facebook: String,
      instagram: String,
      linkedin: String
    }
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  refreshToken: [String]
}, {
  timestamps: true
});

// Pre-save hook to hash password
// Pre-save hook to hash password
// Pre-save hook to hash password
userSchema.pre('save', async function() {
  console.log('Pre-save hook triggered');
  if (!this.isModified('password')) {
    console.log('Password not modified');
    return;
  }
  
  try {
    console.log('Generating salt...');
    const salt = await bcrypt.genSalt(10);
    console.log('Hashing password...');
    this.password = await bcrypt.hash(this.password, salt);
    console.log('Password hashed');
  } catch (error) {
    console.error('Pre-save error:', error);
    throw error;
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
