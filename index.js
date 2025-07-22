const { verifyKeyMiddleware } = require('discord-interactions');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/interactions', verifyKeyMiddleware(process.env.PUBLIC_KEY), (req, res) => {
  const interaction = req.body;

  if (interaction.type === 1) {
    return res.send({ type: 1 }); // Ping
  }

  if (interaction.type === 2) {
    return res.send({
      type: 4,
      data: { content: 'تم الرد على الأمر بنجاح 🎯' },
    });
  }
});

module.exports = app;