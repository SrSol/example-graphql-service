const getProjection = require('./../../utils/get_projection');
const TeacherModel = require ('./../../models/teacher_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function teacher(root, args, context, _info) {
    const projection = getProjection(_info.fieldNodes[0]);
    return TeacherModel.findById(args._id).select(projection).exec()
        .then((foundTeacher) => {
            if (!foundTeacher) {
                throw new Error('Teacher Not Found');
            }
            return foundTeacher;
        })
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function teacherList(root, args, context, _info) {
    const projection = getProjection(_info.fieldNodes[0]);
    return TeacherModel.find().select(projection).exec();
}

module.exports = {
    teacher: teacher,
    teacherList: teacherList
}
