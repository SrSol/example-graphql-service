const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    denomination: { type: String, required: true, trim: true }
}, { collection: 'course' });

module.exports = mongoose.model('Course', courseSchema);
