const questionService = require('../services/question.service');

module.exports = {
  async create(req, res) {
    try {
      const newQuestion = await questionService.create(req.body);
      res.status(201).json(newQuestion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const questions = await questionService.getAll();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const question = await questionService.getById(req.params.id);
      if (!question) return res.status(404).json({ message: 'Not found' });
      res.json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const updated = await questionService.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ message: 'Not found' });
      res.json(updated);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      const deleted = await questionService.remove(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
