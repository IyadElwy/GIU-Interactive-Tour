const User = require('../models/userSchema')

exports.addPT = async (req, res, next) => {
    
    const {userId , personalTourID} = req.body
    const user = await User.findOneById({userId})
    user.personalTour = [...user.personalTour , personalTourID]
    const newArr = await foundUser.save()
    res.status(200).json({
        status: 'success',
        data:{
            update:newArr
        }
    })
    
}
exports.deletePT = async (req, res, next) => {
    
    const {userId , personalTourID} = req.body
    const user = await User.findOneById({userId})
    user.personalTour = user.personalTour.filter(p => p !== ptId)
    const newArr = await foundUser.save()
    res.status(200).json({
        status: 'success',
        data:{
            update:newArr
        }
    })
    
}
