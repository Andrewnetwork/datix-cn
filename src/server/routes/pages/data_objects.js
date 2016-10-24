import express from 'express';

export const router = express.Router();

router.get('/browser', (req, res) => {
  res.render('under-construction.ejs',{node: 'dataobjects', leaf: 'browser'});
});

router.get('/csv', (req, res) => {
  res.render('under-construction.ejs',{node: 'dataobjects', leaf: 'csv'});
});

router.get('/pdf', (req, res) => {
  res.render('under-construction.ejs',{node: 'dataobjects', leaf: 'pdf'});
});

router.get('/excel', (req, res) => {
  res.render('under-construction.ejs',{node: 'dataobjects', leaf: 'excel'});
});

router.get('/word', (req, res) => {
  res.render('under-construction.ejs',{node: 'dataobjects', leaf: 'word'});
});
