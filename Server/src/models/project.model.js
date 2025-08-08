import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image_url: String,
  repository_url: String,
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
  readme: String,
  stars: { type: Number, default: 0 },
  tech_stack: [String],
  tags: { type: [String], index: true },
  live_demo_url: String,
  assigned_mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
