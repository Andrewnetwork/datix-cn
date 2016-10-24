import express from 'express';

export const router = express.Router();

router.get('/quarterlysales', (req, res) => {
  res.render('under-construction.ejs',{node: 'reports', leaf: 'quarterlysales'});
});

router.get('/balancesheet', (req, res) => {
  res.render('under-construction.ejs',{node: 'reports', leaf: 'balancesheet'});
});

router.get('/prospects', (req, res) => {
  res.render('under-construction.ejs',{node: 'reports', leaf: 'prospects'});
});

router.get('/infrastructure', (req, res) => {
  res.render('under-construction.ejs',{node: 'reports', leaf: 'infrastructure'});
});
