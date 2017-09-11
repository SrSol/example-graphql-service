const getProjection = require('./../../utils/get_projection');
const GroupModel = require('./../../models/group_model');
const CourseModel = require('./../../models/course_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function groups(root, args, context, _info) {
    const arrayOfPromises = [];
    const PROJECTION = getProjection(_info.fieldNodes[0]);

    root.groups.forEach((groupId) => {
        arrayOfPromises.push(GroupModel.findById(groupId)
            .select(PROJECTION).exec());
    });

    return Promise.all(arrayOfPromises);
}

function courses(root, args, context, _info) {
    const arrayOfPromises = [];
    const PROJECTION = getProjection(_info.fieldNodes[0]);

    root.courses.forEach((courseId) => {
        arrayOfPromises.push(CourseModel.findById(courseId)
            .select(PROJECTION).exec());
    });

    return Promise.all(arrayOfPromises);
}

module.exports = {
    groups: groups,
    courses: courses
};
