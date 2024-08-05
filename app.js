const express = require('express');
const app = express();

app.use(express.json()); // 用于解析JSON格式的请求体

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const user = new User({ name, email });
    try {
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).send();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  app.delete('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).send();
      res.send({ message: 'User deleted' });
    } catch (error) {
      res.status(500).send(error);
    }
  });