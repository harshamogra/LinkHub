const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
//Update user
router.put("/:id", async(req,res)=>{
    if(req.body.userId == req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);
            }catch(err){
                return res.status(403).json(err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            });
            res.status(200).json("Account has been updated")
        }catch(err){
            return res.status(403).json(err);
        }
    }else{
     
        return res.status(403).json("You can only update your account!")
    }
})
//Delete user
router.delete("/:id", async(req,res)=>{
    if(req.body.userId == req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete({_id: req.params.id })
            res.status(200).json("Account has been deleted")
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
     
        return res.status(403).json("You can delete only your account!")
    }
})
//get a USer
router.get("/", async(req,res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
        try{
            const user = userId 
            ? await User.findById(userId)
            : await User.findOne({username: username})
            const {password,updatedAt, ...other} = user._doc
            res.status(200).json(other)
        }catch(err){
            return res.status(500).json(err);
        }
})
//Follow User
router.put("/:id/follow", async(req,res)=>{
    if(req.body.userId!== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{following:req.params.id}});
                res.status(200).json("User has been followed");

            }else{
                res.status(403).json("You already Follow this user")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("Cannot follow yourself")
    }
})

//Unfollow User
router.put("/:id/unfollow", async(req,res)=>{
    if(req.body.userId!== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{following:req.params.id}});
                res.status(200).json("User has been unfollowed");

            }else{
                res.status(403).json("You are already not a follower")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("Cannot unfollow yourself")
    }
})

//get friends

router.get("/friends/:userId", async(req,res)=>{
    try {
        const user = await User.findById(req.params.userId);
        const friends = await Promise.all(
            user.following.map(friendId=>{
                return User.findById(friendId);
            })
        ); //use promise to fetch all friends
        let friendList = [];
        friends.map(friend=>{
            const {_id, username, profilePicture} = friend//destructure only what  u need
            friendList.push({_id,username, profilePicture});
        })
        res.status(200).json(friendList);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router