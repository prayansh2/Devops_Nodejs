// server/server.js

const express = require('express');
const app = express();
const userRoutes = require('./routes/users');

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js CI App!' });
});
app.get('/api/version', (req, res) => {
    res.json({ version: '1.0.1' });
  });

app.use('/api/users', userRoutes);

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
