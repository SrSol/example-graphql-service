const CourseModel = require ('./../../models/course_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function createCourse(root, args, context) {
    const course = new CourseModel({
        denomination: args.input.denomination,
    });

    return course.save()
        .then(newCourse => newCourse)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function updateCourse(root, args, context) {
    return CourseModel.findById(args.input._id).exec()
        .then((foundCourse) => {
            if (!foundCourse) {
                throw new Error('Course Not Found');
            }
            const courseData = foundCourse;
            const input = args.input;

            courseData.denomination = input.denomination || courseData.denomination;

            return courseData.save();
        })
        .then(updatedCourse => updatedCourse)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function deleteCourse(root, args, context) {
    return CourseModel.findById(args._id).exec()
        .then((foundCourse) => {
            if (!foundCourse) {
                throw new Error('Course Not Found');
            }

            return foundCourse.remove();
        })
        .then(removedCourse => removedCourse)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

module.exports = {
    createCourse: createCourse,
    updateCourse: updateCourse,
    deleteCourse: deleteCourse
}
