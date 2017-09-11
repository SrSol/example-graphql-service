const getProjection = require('./../../utils/get_projection');
const StudentModel = require ('./../../models/student_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function student(root, args, context, _info) {
    const projection = getProjection(_info.fieldNodes[0]);
    return StudentModel.findById(args._id).select(projection).exec()
        .then((foundStudent) => {
            if (!foundStudent) {
                throw new Error('Student Not Found');
            }
            return foundStudent;
        })
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function studentList(root, args, context, _info) {
    const projection = getProjection(_info.fieldNodes[0]);
    return StudentModel.find().select(projection).exec();
}

module.exports = {
    student: student,
    studentList: studentList
}
