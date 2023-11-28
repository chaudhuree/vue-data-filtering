const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const dbPath = path.join(__dirname, 'db.json');

// Read data from db.json
const jsonData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

app.get('/api/tasks', (req, res) => {
  res.json(jsonData);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
