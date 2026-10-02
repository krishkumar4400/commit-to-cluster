import User from "../models/user.model.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  return res.status(201).json({
    user,
  });
};

const getAllUser = async (req, res) => {
  const users = await User.find();
  return res.status(200).json({
    users,
  });
};

export { registerUser, getAllUser };
