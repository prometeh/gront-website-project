/* const { _func } = require("@hapi/joi");
const _jwt = require("jsonwebtoken"); */


module.exports  = function (req,res,next){
  const bearerHeader = req.header("Authorization");
  if(typeof bearerHeader !== "undefined"){
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }
  else
    res.sendStatus(403);
};