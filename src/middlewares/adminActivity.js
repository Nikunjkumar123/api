const adminAct = async (req, res, next) => {
    if (req.user.role === 'admin') {
      next();  
    } else {
      res.status(403).send('Access denied: only for admin');
    }
};
  
module.exports = adminAct;
  