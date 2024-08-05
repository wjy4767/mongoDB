// server.js
const express = require('express');
const app = express();
const port = 3000;

// 用于解析请求体中的JSON数据
app.use(express.json());

// GET 请求：获取资源列表
app.get('/api/resources', (req, res) => {
  // 假设我们有一个资源数组
  const resources = [{ id: 1, name: 'Resource 1' }];
  res.status(200).json(resources);
});

// POST 请求：创建新资源
app.post('/api/resources', (req, res) => {
  const newResource = req.body; // 假设客户端发送了新资源数据
  // 这里应该添加逻辑来保存新资源
  res.status(201).json(newResource);
});

// PUT 请求：更新资源
app.put('/api/resources/:id', (req, res) => {
  const id = req.params.id;
  const updatedResource = req.body;
  // 这里应该添加逻辑来更新资源
  res.status(200).json(updatedResource);
});

// DELETE 请求：删除资源
app.delete('/api/resources/:id', (req, res) => {
  const id = req.params.id;
  // 这里应该添加逻辑来删除资源
  res.status(204).send();
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});