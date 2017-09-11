const StudentModel = require ('./../../models/student_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function createStudent(root, args, context) {
    const student = new StudentModel({
        name: args.input.name,
        last_name: args.input.last_name,
        group: args.input.group
    });

    return student.save()
        .then(newStudent => newStudent)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function updateStudent(root, args, context) {
    return StudentModel.findById(args.input._id).exec()
        .then((foundStudent) => {
            if (!foundStudent) {
                throw new Error('Student Not Found');
            }
            const studentData = foundStudent;
            const input = args.input;

            studentData.name = input.name || studentData.name;
            studentData.last_name = input.last_name || studentData.last_name;
            studentData.group = input.group || studentData.group;

            return studentData.save();
        })
        .then(updatedStudent => updatedStudent)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function deleteStudent(root, args, context) {
    return StudentModel.findById(args._id).exec()
        .then((foundStudent) => {
            if (!foundStudent) {
                throw new Error('Student Not Found');
            }

            return foundStudent.remove();
        })
        .then(removedStudent => removedStudent)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

module.exports = {
    createStudent: createStudent,
    updateStudent: updateStudent,
    deleteStudent: deleteStudent
}
