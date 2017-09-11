const getProjection = require('./../../utils/get_projection');
const CourseModel = require ('./../../models/course_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function course(root, args, context, _info) {
    const projection = getProjection(_info.fieldNodes[0]);
    return CourseModel.findById(args._id).select(projection).exec()
        .then((foundCourse) => {
            if (!foundCourse) {
                throw new Error('Course Not Found');
            }
            return foundCourse;
        })
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function courseList(root, args, context, _info) {
    const projection = getProjection(_info.fieldNodes[0]);
    return CourseModel.find().select(projection).exec();
}

module.exports = {
    course: course,
    courseList: courseList
}
