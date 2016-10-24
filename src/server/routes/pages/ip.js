import express from 'express';

export const router = express.Router();

router.get('/browser', (req, res) => {
  res.render('under-construction.ejs',{node: 'ip', leaf: 'browser'});
});

router.get('/nodered', (req, res) => {
  res.render('under-construction.ejs',{node: 'ip', leaf: 'nodered'});
});

router.get('/source', (req, res) => {
  res.render('under-construction.ejs',{node: 'ip', leaf: 'source'});
});
