const getProjection = require('./../../utils/get_projection');
const StudentModel = require('./../../models/student_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function students(root, args, context, _info) {
    const arrayOfPromises = [];
    const PROJECTION = getProjection(_info.fieldNodes[0]);

    return StudentModel.find({ group: root._id }).select(PROJECTION).exec()
        .then(students => students)
        .catch((error) => {
            logger.error(error);
            return null;
        });
}

module.exports = {
    students: students
};
