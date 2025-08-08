import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  github_username: String,
  role: String,
  experience_level: String,
  github_token: String,
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
}, { timestamps: true });

export default mongoose.model('Mentor', mentorSchema);
