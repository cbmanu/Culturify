import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("The password cant include 'password' ");
        }
      },
    },
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error("The age must be greater than 0");
        }
      },
    },
    interest: {
      type: [String],
      default: [],
      enum: ["musica", "libros", "senderismo", "fitness"],
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
userSchema.methods.toJSON = function () {
  user = this;
  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.tokens;
  return userObj;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Unable to login");
  } else {
    return user;
  }
};

userSchema.pre("deleteOne", { document: true }, async function (next) {
  user = this;
  await Task.deleteMany({ owner: user._id });
  next();
});
//encrypting password before saving
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

export default mongoose.model("User", userSchema);
