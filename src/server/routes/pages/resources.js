import express from 'express';

export const router = express.Router();

router.get('/cash', (req, res) => {
  res.render('under-construction.ejs',{node: 'resources', leaf: 'cash'});
});

router.get('/stocks', (req, res) => {
  res.render('under-construction.ejs',{node: 'resources', leaf: 'stocks'});
});

router.get('/bonds', (req, res) => {
  res.render('under-construction.ejs',{node: 'resources', leaf: 'bonds'});
});

router.get('/other', (req, res) => {
  res.render('under-construction.ejs',{node: 'resources', leaf: 'other'});
});
