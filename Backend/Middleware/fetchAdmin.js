const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send("Access Denied!!");
    }
    try {
        const data = jwt.verify(token, "^$&%*^(&)&(^%^%&%@^$#&%*$%*");
        if(data.user && data.user.admin){
            req.user = data.user;
            next()
        }
        else{
            res.status(401).send({message:"Access Denied!!"})
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({message:"Access Denied!!"});
    }
};

module.exports = isAdmin;
