const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const intervieweeSchema = new mongoose.Schema({
  intname: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  intemail: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  intpassword: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  intconfirmPass: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.intpassword;
      },
      message: 'Passwords are not the same!'
    }
  },
  intpasswordChangedAt: Date,
  intpasswordResetToken: String,
  intpasswordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
}
);

intervieweeSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('intpassword')) return next();

  // Hash the password with cost of 12
  this.intpassword = await bcrypt.hash(this.intpassword, 12);

  // Delete confirmPass field
  this.intconfirmPass = undefined;
  next();
});

intervieweeSchema.pre('save', function(next) {
  if (!this.isModified('intpassword') || this.isNew) return next();

  this.intpasswordChangedAt = Date.now() - 1000;
  next();
});

intervieweeSchema.pre(/^find/, function(next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

intervieweeSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

intervieweeSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.intpasswordChangedAt) {
    const changedTimestamp = parseInt(
      this.intpasswordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

intervieweeSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.intpasswordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.intpasswordResetToken);

  this.intpasswordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const Interviewee = mongoose.model('Interviewee', intervieweeSchema);

module.exports = Interviewee;