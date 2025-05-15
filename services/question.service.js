const Question = require('../models/question.model');

module.exports = {
  create(data) {
    return Question.create(data);
  },

  getAll() {
    return Question.find().populate('createdBy');
  },

  getById(id) {
    return Question.findById(id).populate('createdBy');
  },

  update(id, data) {
    return Question.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },

  remove(id) {
    return Question.findByIdAndDelete(id);
  }
};
