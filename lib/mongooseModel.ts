import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address",
    ],
  },
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minLength: [3, "First Name should be atleast 5irs Nameers long"],
    maxLength: [30, "First Name should be less than 30 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name  is required"],
    minLength: [3, "Last Name should be atleast 5 characters long"],
    maxLength: [30, "Last Name  should be less than 30 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  date_of_birth: {
    type: String,
    required: [true, "Date of Birth is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["Male", "Female", "Other"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
});

const User = models.User || mongoose.model("User", UserSchema);

export default User;
