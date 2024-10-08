const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [true, 'Please add a title for the review'],
		maxlength: 100,
	},
	text: {
		type: String,
		required: [true, 'Please add some text'],
	},
	rating: {
		type: Number,
		min: 1,
		max: 10,
		required: [true, 'Please add a rating between 1 and 10'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	bootcamp: {
		type: mongoose.Schema.ObjectId,
		ref: 'Bootcamp',
		required: true,
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
});

// Prevent user from submitting more than 1 review per bootcamp
ReviewSchema.index({ bootcamp: 1, user: 1 }, { unique: true });

// Calculate the average rating
ReviewSchema.statics.calculateAverageRating = async function (bootcampId) {
	const obj = await this.aggregate([
		{
			$match: { bootcamp: bootcampId }, // Match bootcamp with id 'bootcampId'
		},
		{
			// Group all bootcamps matched and calculate their averageRating of their rating fields
			$group: {
				_id: '$bootcamp',
				averageRating: { $avg: '$rating' },
			},
		},
	]);

	try {
		await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
			averageRating: obj[0].averageRating,
		});
	} catch (error) {
		console.error(error);
	}
};

// Call averageRating method after save
ReviewSchema.post('save', async function () {
	await this.constructor.calculateAverageRating(this.bootcamp);
});

// Call averageRating method before remove
ReviewSchema.post('remove', async function () {
	await this.constructor.calculateAverageRating(this.bootcamp);
});

module.exports = mongoose.model('Review', ReviewSchema);
