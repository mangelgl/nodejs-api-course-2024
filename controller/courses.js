const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Course = require('../models/Course');
const Bootcamp = require('../models/Bootcamp');

/**
 * * @desc Get all courses
 * @route GET /api/v1/courses
 * @access public
 */
const getCourses = asyncHandler(async (req, res, next) => {
	// * Finding resource in database
	res.status(200).json(res.advancedResults);
});

/**
 * * @desc Get a single course
 * @route GET /api/v1/courses/:id
 * @access public
 */
const getSingleCourse = asyncHandler(async (req, res, next) => {
	const course = await Course.findById(req.params.id).populate({
		path: 'bootcamp',
		select: 'name description',
	});

	res.status(200).json(course);
});

/**
 * * @desc Get courses from a bootcamp
 * @route GET /api/v1/bootcamps/:bootcampId/courses
 * @access public
 */
const getCoursesFromBootcamp = asyncHandler(async (req, res, next) => {
	const courses = await Course.find({
		bootcamp: req.params.bootcampId,
	}).populate({
		path: 'bootcamp',
		select: 'name description',
	});

	res.status(200).json({
		count: courses.length,
		data: courses,
	});
});

/**
 * * @desc Create a new course
 * @route POST /api/v1/bootcamps/:bootcampId/courses
 * @access private
 */
const createCourse = asyncHandler(async (req, res, next) => {
	req.body.bootcamp = req.params.bootcampId;
	req.body.user = req.user.id;

	// Check if the bootcamp exists
	const bootcamp = await Bootcamp.findById(req.params.bootcampId);

	if (!bootcamp) {
		return next(
			new ErrorResponse(404, `No bootcamp with id ${req.params.bootcampId}`)
		);
	}

	// Make sure user is bootcamp owner
	if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
		return next(
			new ErrorResponse(
				401,
				`User ${req.user.id} is not authorize to add a course to bootcamp ${bootcamp._id}`
			)
		);
	}

	const course = await Course.create(req.body);

	res.status(201).json({
		success: true,
		data: course,
	});
});

/**
 * * @desc Updates a single course
 * @route PUT /api/v1/courses/:id
 * @access public
 */
const updateCourse = asyncHandler(async (req, res, next) => {
	let course = await Course.findById(req.params.id);

	if (!course) {
		return next(
			new ErrorResponse(404, `No course found with id ${req.params.id}`)
		);
	}

	// Make sure user is course owner
	if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
		return next(
			new ErrorResponse(
				401,
				`User ${req.user.id} is not authorize to update this course`
			)
		);
	}

	course = await Course.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		sucess: true,
		data: course,
	});
});

/**
 * * @desc Deletes a single course
 * @route DELETE /api/v1/courses/:id
 * @access public
 */
const deleteCourse = asyncHandler(async (req, res, next) => {
	const course = await Course.findById(req.params.id);

	if (!course) {
		return next(
			new ErrorResponse(404, `No course found with id ${req.params.id}`)
		);
	}

	// Make sure user is course owner
	if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
		return next(
			new ErrorResponse(
				401,
				`User ${req.user.id} is not authorize to delete this course`
			)
		);
	}

	course.remove();

	res.status(200).json({
		sucess: true,
		data: {},
	});
});

module.exports = {
	getCourses,
	getSingleCourse,
	getCoursesFromBootcamp,
	createCourse,
	updateCourse,
	deleteCourse,
};
