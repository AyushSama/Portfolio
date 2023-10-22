const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send("Access Denied!!");
    }
    try {
        const data = jwt.verify(token, "^$&%*^(&)&(^%^%&%@^$#&%*$%*");
        req.user = data.user;
        if(data.user && data.user.admin){
            console.log(data)
            next()
        }
        else{
            res.status(401).send({message:"Nayyyyy...Access Denied!!"});
        }
    } catch (error) {
        res.status(401).send({message:"Access Denied!!"});
    }
};

module.exports = isAdmin;
