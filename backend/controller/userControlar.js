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

// finding user

// Ensure the path is correct

export const getUser = async (req, res) => {
  try {
    const users = await User.find(); // Use the capitalized 'User' model
    res.status(200).json(users); // Respond with the users data
  } catch (error) {
    console.error(`Error getting users: ${error}`);
    res.status(500).json({ message: "Internal Server Error" }); // Send error response
  }
};
