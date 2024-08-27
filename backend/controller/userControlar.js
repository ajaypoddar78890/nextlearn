import User from "../Scema/user.js";

// creating user
export const createuser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
      massage: "user created successfully",
      Data: user,
    });
  } catch (error) {
    console.log(`getting error creating user  ${error}`);
  }
};
