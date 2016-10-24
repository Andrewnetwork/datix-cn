import express from 'express';

export const router = express.Router();

router.get('/local', (req, res) => {
  res.render('under-construction.ejs',{node: 'compute', leaf: 'local'});
});

router.get('/aws', (req, res) => {
  res.render('under-construction.ejs',{node: 'compute', leaf: 'aws'});
});

router.get('/azure', (req, res) => {
  res.render('under-construction.ejs',{node: 'compute', leaf: 'azure'});
});

router.get('/do', (req, res) => {
  res.render('under-construction.ejs',{node: 'compute', leaf: 'do'});
});

router.get('/gcp', (req, res) => {
  res.render('under-construction.ejs',{node: 'compute', leaf: 'gcp'});
});

router.get('/linode', (req, res) => {
  res.render('under-construction.ejs',{node: 'compute', leaf: 'linode'});
});
