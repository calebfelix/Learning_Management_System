const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);

router.get('/profile', authController.profile_get);
router.get('/tasks', authController.task_get);
router.get('/courses', authController.courses_get);

router.post('/tasks', authController.task_post);



module.exports = router;