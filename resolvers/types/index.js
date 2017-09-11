const teacherTypeResolvers = require('./teacher_resolver');
const studentTypeResolvers = require('./student_resolver');
const groupTypeResolvers = require('./group_resolver');
const courseTypeResolvers = require('./course_resolver');

module.exports = {
    Teacher: teacherTypeResolvers,
    Student: studentTypeResolvers,
    Group: groupTypeResolvers,
    Course: courseTypeResolvers
};
