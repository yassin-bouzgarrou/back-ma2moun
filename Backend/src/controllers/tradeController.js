const Trade = require('../models/Trade');

const createTrade = async (req, res) => {
  const { receiver, senderProduct, receiverProduct } = req.body;
  const trade = await Trade.create({ 
    sender: req.user._id, 
    receiver, 
    senderProduct, 
    receiverProduct 
  });
  res.status(201).json(trade);
};

module.exports = { createTrade };
