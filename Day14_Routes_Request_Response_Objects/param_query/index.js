
import express from 'express'

const app = express(); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });


   app.get('/users/:id', (req, res) => {
    res.json({ userId: req.params.id });
  });


  // Multiple parameters
  app.get('/posts/:year/:slug', (req, res) => {
    const { year, slug } = req.params;
    res.json({ year, slug });
  });