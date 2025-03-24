const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  senderProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  receiverProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
}, { timestamps: true });

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
