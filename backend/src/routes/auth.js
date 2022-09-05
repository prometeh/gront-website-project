const router = require("express").Router();
const User = require("../model/User");
const {registerValidation, loginValidation} = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req,res) => {

  // lets validate the data before we a user
  const{error}=registerValidation(req.body);
  if(error) return res.status(400).send("Username/password has atleast 6 characters");

    

  // check if a user already exist
  const usernameExist = await User.findOne({username:req.body.username});
  if(usernameExist) return res.status(400).send("Use already exist");

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password,salt);

  // create a new user
  const user = new User({
    username: req.body.username,
    password: hashedPassword
  });
    
  try{
    await user.save();
    res.send("successfully saved");
  }catch(err){
    res.status(400).send(err);
  }
}); 


// Login
router.post("/login", async (req,res)=>{
// lets validate the data before we a user
  const{error}=loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  // check if a user exist
  const user = await User.findOne({username:req.body.username});
  if(!user) return res.status(400).send("User not found");

  // check for password
  const validPass = await bcrypt.compare(req.body.password,user.password);
  if(!validPass) {
    res.header("auth-token"," ");
    return res.status(400).send("Invalid Password");
  }
  // create and assign a token
  const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
  res.header("auth-token",token).send(token);

  //res.send('Logged in!!!!');

}); 

module.exports = router;