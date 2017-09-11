const getProjection = require('./../../utils/get_projection');
const TeacherModel = require('./../../models/teacher_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function teachers(root, args, context, _info) {
    const arrayOfPromises = [];
    const PROJECTION = getProjection(_info.fieldNodes[0]);

    return TeacherModel.find({courses: {'$elemMatch': {_id: root._id}}}).select(PROJECTION).exec()
        .then(teachers => teachers)
        .catch((error) => {
            logger.error(error);
            return null;
        });
}

module.exports = {
    teachers: teachers
};
