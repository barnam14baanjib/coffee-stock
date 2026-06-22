const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let db = {
  products: [],
  transactions: [],
  finance: [],
  orders: []
};

app.get('/api/data', (req, res) => res.json(db));

app.post('/api/data', (req, res) => {
  db = { ...db, ...req.body };
  res.json({ ok: true });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
