const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password -refreshToken');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { bio, avatar, location, website, socialLinks } = req.body;
    
    // Build profile object
    const profileFields = {};
    if (bio) profileFields.bio = bio;
    if (avatar) profileFields.avatar = avatar;
    if (location) profileFields.location = location;
    if (website) profileFields.website = website;
    if (socialLinks) profileFields.socialLinks = socialLinks;

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { $set: { profile: profileFields } },
      { new: true }
    ).select('-password -refreshToken');

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Placeholder for password change (authenticated)
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.userId);

    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid current password' });
    }

    user.password = newPassword;
    await user.save();
    
    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
