const express = require('express');
const { verifyKeyMiddleware } = require('discord-interactions');

const app = express();
app.use(express.json());

app.post('/api/interactions', verifyKeyMiddleware(process.env.PUBLIC_KEY), (req, res) => {
  const interaction = req.body;

  if (interaction.type === 1) {
    return res.send({ type: 1 }); // Ping check
  }

  if (interaction.type === 2) {
    return res.send({
      type: 4,
      data: { content: 'مرحبًا! بوتك جاهز للعمل 💬' }
    });
  }
});

module.exports = app;