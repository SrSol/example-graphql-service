const TeacherModel = require ('./../../models/teacher_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function createTeacher(root, args, context) {
    const teacher = new TeacherModel({
        name: args.input.name,
        last_name: args.input.last_name,
        groups: args.input.groups,
        courses: args.input.courses
    });

    return teacher.save()
        .then(newTeacher => newTeacher)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function updateTeacher(root, args, context) {
    return TeacherModel.findById(args.input._id).exec()
        .then((foundTeacher) => {
            if (!foundTeacher) {
                throw new Error('Teacher Not Found');
            }
            const teacherData = foundTeacher;
            const input = args.input;

            teacherData.name = input.name || teacherData.name;
            teacherData.last_name = input.last_name || teacherData.last_name;
            teacherData.groups = input.groups || teacherData.groups;
            teacherData.courses = input.courses || teacherData.courses;

            return teacherData.save();
        })
        .then(updatedTeacher => updatedTeacher)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function deleteTeacher(root, args, context) {
    return TeacherModel.findById(args._id).exec()
        .then((foundTeacher) => {
            if (!foundTeacher) {
                throw new Error('Teacher Not Found');
            }

            return foundTeacher.remove();
        })
        .then(removedTeacher => removedTeacher)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

module.exports = {
    createTeacher: createTeacher,
    updateTeacher: updateTeacher,
    deleteTeacher: deleteTeacher
}
