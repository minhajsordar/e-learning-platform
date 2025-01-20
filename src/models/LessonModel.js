import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "No name"
  },
  slug: {
    type: String,
    required: true,
    default: "no-name"
  },
  content: {
    type: String,
    required: true,
    default: "Empty lesson."
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category",required:true, default: null },

}, {
  timestamps: true
});

const Lesson = mongoose.models?.Lesson || mongoose.model('Lesson', categorySchema);

export default Lesson
