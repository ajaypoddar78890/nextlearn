import User from "../Scema/user.js";

// creating user
export const createuser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    console.log(user.name);
  } catch (error) {
    console.log(`getting error creating user ` % { error });
  }
};
