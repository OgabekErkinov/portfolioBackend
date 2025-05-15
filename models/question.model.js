const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
  questionText: { type: String, required: true, trim: true },
  correctAnswer: { type: String, required: true,
    validate: {
      validator: function (v) {
        return this.options.includes(v);
      },
      message: props => `"${props.value}" is not in options array`
    }
  },
  options: {
    type: [String],
    required: true,
    validate: [arr => arr.length === 4, 'Options must have exactly 4 choices']
  },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  categoryId: { type: String, required: true, trim: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true }
}, {
  timestamps: true
});


module.exports = model('Question', questionSchema);
