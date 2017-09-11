const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    last_name: { type: String, trim: true },
    groups: [{
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Group'}
    }],
    courses: [{
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course'}
    }]
}, {collection: 'teacher'});

module.exports = mongoose.model('Teacher', teacherSchema);
