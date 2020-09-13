import mongoose from "mongoose";
const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    approach: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Form", formSchema);
