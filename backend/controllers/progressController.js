const Progress = require('../models/progressSchema')

exports.getProgress =  async (req, res, next) =>{
    try{
        const userId = await Progress.findById(req.params.UserId);
        if(!userId){
            throw new Error("User not found");     
            res.status(404).json({ status: "Error" });

        }
        res.status(201).json({ status: "Successs", data: userId }); 
    }
    catch (err) {
        res.status(400).json({
          status: "Error",
          message: err.message
    });
}
}

exports.createProgress =  async (req, res, next) =>{
    try{
        const [userId] = req.userId
        const newProgress = await Progress.create({userId})
        res.status(201).json({ status: "Successs", data: userId }); 
    }
    catch (err) {
        res.status(400).json({
          status: "Error",
          message: err.message
    });
}
}

exports.updateProgress =  async (req, res, next) =>{
    try{
        const userId = await Progress.findById(req.params.UserId);
        const location = await Progress.findById(req.params.Locations);
        if(!userId){
            throw new Error("User not found");     
            res.status(404).json({ status: "Error" });

        }
        const n = await cart.findByIdAndUpdate(userId,location)

        res.status(201).json({ status: "Successs", data: userId }); 

    }
    catch (err) {
        res.status(400).json({
          status: "Error",
          message: err.message
    });
}
} 

