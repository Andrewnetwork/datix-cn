import express from 'express';

export const router = express.Router();

router.get('/browser', (req, res) => {
  res.render('under-construction.ejs',{node: 'statmodels', leaf: 'browser'});
});

router.get('/training', (req, res) => {
  res.render('under-construction.ejs',{node: 'statmodels', leaf: 'training'});
});

router.get('/metrics', (req, res) => {
  res.render('under-construction.ejs',{node: 'statmodels', leaf: 'metrics'});
});
