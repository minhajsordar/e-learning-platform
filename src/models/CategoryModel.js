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
  rootCategory: {
    type: Boolean,
    default: false
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", default:null }],
}, {
  timestamps: true
});

const Category = mongoose.models?.Category || mongoose.model('Category', categorySchema);

export default Category
