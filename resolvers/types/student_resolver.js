const getProjection = require('./../../utils/get_projection');
const GroupModel = require('./../../models/group_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function group(root, args, context, _info) {
    const PROJECTION = getProjection(_info.fieldNodes[0]);
    return GroupModel.findById(root.group).select(PROJECTION).exec()
        .then(foundStudent => foundStudent)
        .catch((error) => {
            logger.error(error);
            return null;
        });
}

module.exports = {
    group: group
};
