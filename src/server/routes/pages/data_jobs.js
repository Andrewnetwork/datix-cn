import express from 'express';

export const router = express.Router();

export const base = 'datajobs';

router.get('/browser', (req, res) => {
  res.render('under-construction.ejs',{node: 'datajobs', leaf: 'browser'});
});

router.get('/phantomcap', (req, res) => {
  res.render('under-construction.ejs',{node: 'datajobs', leaf: 'phantomcap'});
});

router.get('/opencvext', (req, res) => {
  res.render('under-construction.ejs',{node: 'datajobs', leaf: 'opencvext'});
});

router.get('/etl', (req, res) => {
  res.render('under-construction.ejs',{node: 'datajobs', leaf: 'etl'});
});
