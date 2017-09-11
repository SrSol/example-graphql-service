const teacherQueryResolvers = require('./teacher_resolver');
const groupQueryResolvers = require('./group_resolver');
const courseQueryResolvers = require('./course_resolver');
const studentQueryResolvers = require('./student_resolver');

const queriesResolvers = Object.assign({},
    teacherQueryResolvers,
    groupQueryResolvers,
    courseQueryResolvers,
    studentQueryResolvers);

module.exports = {
    Query: queriesResolvers,
};
