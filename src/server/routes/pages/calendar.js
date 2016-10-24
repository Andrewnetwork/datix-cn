import express from 'express';

export const router = express.Router();

router.get('/', (req, res) => {
  res.render('calendar.ejs',{node: 'calendar', leaf: null});
});
