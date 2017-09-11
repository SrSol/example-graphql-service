const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group'}
}, { collection: 'student' });

module.exports = mongoose.model('Student', studentSchema);
