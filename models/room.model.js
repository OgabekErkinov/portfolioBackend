const { Schema, model} = require('mongoose')

const roomSchema = new Schema({
    firstPlayer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    secondPlayer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    firstPlayerResult: { type: Number, default: 0 },
    secondPlayerResult: { type: Number, default: 0 },
    status: { type: String, enum: ['waiting', 'active', 'finished'], default: 'waiting' }
  }, {
    timestamps: true
  });

  
  module.exports = model('Room', roomSchema)