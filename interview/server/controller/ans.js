const User = require('./../models/ans');
const catchAsync = require('./../utils/catchAsync');

exports.store = catchAsync(async (req, res, next) => {
    const newAns = await User.create({
      answer: req.body.answer
    });
    res.status(200).json({
        status: 'success',
        results: newAns.length,
        data: {
          newAns
        }
      });
  });

  exports.getAns = catchAsync(async (req, res, next) => {
    const ans = await User.find();
  
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: ans.length,
      data: {
        ans
      }
    });
  });