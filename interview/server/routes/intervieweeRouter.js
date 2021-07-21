const express = require('express');
const intervieweeController = require('./../controller/intervieweeController');
const intauthController = require('./../controller/intauth');

const router = express.Router();

router.post('/signup', intauthController.signup);
router.post('/login', intauthController.login);

router.post('/forgotPassword', intauthController.forgotPassword);
router.patch('/resetPassword/:token', intauthController.resetPassword);

router.patch(
  '/updateMyPassword',
  intauthController.protect,
  intauthController.updatePassword
);

router.patch('/updateMe', intauthController.protect, intervieweeController.updateMe);
router.delete('/deleteMe', intauthController.protect, intervieweeController.deleteMe);

router
  .route('/')
  .get(intervieweeController.getAllUsers)
  .post(intervieweeController.createUser);

router
  .route('/:id')
  .get(intervieweeController.getUser)
  .patch(intervieweeController.updateUser)
  .delete(intervieweeController.deleteUser);

module.exports = router;