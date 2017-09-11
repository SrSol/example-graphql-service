const getProjection = require('./../../utils/get_projection');
const GroupModel = require ('./../../models/group_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function group(root, args, context, _info) {
    const projection = getProjection(_info.fieldNodes[0]);
    return GroupModel.findById(args._id).select(projection).exec()
        .then((foundGroup) => {
            if (!foundGroup) {
                throw new Error('Group Not Found');
            }
            return foundGroup;
        })
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function groupList(root, args, context, _info) {
    const projection = getProjection(_info.fieldNodes[0]);
    return GroupModel.find().select(projection).exec();
}

module.exports = {
    group: group,
    groupList: groupList
}
