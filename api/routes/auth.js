const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
//Register
router.post('/register',async(req,res)=>{
    let  {username,email,password} = req.body
    //hash the password
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        })
        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err){
        console.log(err)
        res.status(404)
    }
})

//login
router.post('/login', async(req,res)=>{
    let {email, password} = req.body;
    try{
    const user = await User.findOne({email:email})
    if (!user) {
        return res.status(404).json("User not found");
      }
    const validPassword =await bcrypt.compare(password, user.password)
    
    if(!validPassword){
        return res.status(400).json("Invalid password")
    }
  
      // Continue with login logic (e.g., password check) here...
      res.status(200).json({message:"User found. Proceeding with login...",user:user})
    }
    catch(err){
        console.log(err)
        res.status(500).json(err);
    }

})





module.exports = router