const jwt = require('jsonwebtoken');

const authUser = async(req,res,next)=>{
    const head =await req.headers.authorization;
    if(!head || !head.startsWith('Bearer')){
        res.status(501).json({msg:'unAuthentication failed'});
    }
    const token =await head.split(' ')[1];
    try {
        const auth = jwt.verify(token,process.env.SECRET);
        req.user = {userId:auth.userId,email:auth.email,role:auth.role}
        next();
    } catch (error) {
        res.send(error)
    }
}
module.exports = authUser