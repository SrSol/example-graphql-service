const teacherMutationsResolvers = require('./teacher_resolver');
const groupMutationsResolvers = require('./group_resolver');
const courseMutationsResolvers = require('./course_resolver');
const studentMutationsResolvers = require('./student_resolver');

const mutationsResolver = Object.assign({},
    teacherMutationsResolvers,
    groupMutationsResolvers,
    courseMutationsResolvers,
    studentMutationsResolvers);

module.exports = {
    Mutation: mutationsResolver,
};
