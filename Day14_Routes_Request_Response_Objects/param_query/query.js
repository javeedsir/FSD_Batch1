
import express from 'express'

import  get from  './index'

const app = express();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });


  // GET /search?q=express&page=2
app.get('/search', (req, res) => {
    const { q, page = 1 } = req.query;
    res.json({ q, page: Number(page) });
  })
