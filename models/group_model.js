const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    denomination: { type: String, required: true, trim: true }
}, { collection: 'group' });

module.exports = mongoose.model('Group', groupSchema);
