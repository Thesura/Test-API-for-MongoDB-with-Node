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

users.getById = async (req, res) => {
      try{
            const userById = await user.findOne({ _id: req.body._id});
            res.status(200).json(userById);
      }catch (error){
            res.status(400).json({message: error.message});
      }
};

users.getByName = async (req, res) => {
      try{
            const userByName = await user.findOne({ name: new RegExp(req.body.name, 'i')});
            res.status(200).json(userByName);
      }catch (error){
            res.status(400).json({message: error.message});
      }
};

users.getByEmail = async (req, res) => {
      try{
            const userByEmail = await user.findOne({ email: new RegExp(req.body.email, 'i')});
            res.status(200).json(userByEmail);
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