import user from "../models/user.model.js";


const users = () => {};

users.getAll = async (req, res) => {
      try{
            const allUsers = await user.find({});
            res.status(200).json(allUsers);
      }catch (error){
            res.status(400).json({message: error.message});
      }
};

users.post = async (req, res) => {
      const newUser = new user({
            name: req.body.name,
            email: req.body.email
      });

      try{
            const postUser = await newUser.save();
            res.status(200).json(postUser);
      }catch(error) {
            res.status(400).json({message: error.message});
      }
};
export default users;