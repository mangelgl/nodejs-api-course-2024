const express = require('express');
const router = express.Router({ mergeParams: true });

const User = require('../models/User');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
} = require('../controller/users');

router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
