import express from 'express';

export const router = express.Router();

router.get('/kb', (req, res) => {
  res.render('kb.ejs',{node: 'dashboard', leaf: 'kb'});
});

router.get('/cv', (req, res) => {
  res.render('under-construction.ejs',{node: 'dashboard', leaf: 'cv'});
});

router.get('/about', (req, res) => {
  res.render('under-construction.ejs',{node: 'dashboard', leaf: 'about'});
});
