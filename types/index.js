const teacherTypes = require('./teacher_type');
const groupTypes = require('./group_type');
const courseTypes = require('./course_type');
const studentTypes = require('./student_type');

module.exports = () => [
    teacherTypes,
    groupTypes,
    courseTypes,
    studentTypes
];
