import express from 'express';

export const router = express.Router();

router.get('/', (req, res) => {
  res.render('under-construction.ejs', {node: 'documentation', leaf: null});
});
