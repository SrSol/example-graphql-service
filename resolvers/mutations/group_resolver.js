const GroupModel = require ('./../../models/group_model');
const Logger = require('./../../utils/logger');

const logger = new Logger();

function createGroup(root, args, context) {
    const group = new GroupModel({
        denomination: args.input.denomination,
    });

    return group.save()
        .then(newGroup => newGroup)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function updateGroup(root, args, context) {
    return GroupModel.findById(args.input._id).exec()
        .then((foundGroup) => {
            if (!foundGroup) {
                throw new Error('Group Not Found');
            }
            const groupData = foundGroup;
            const input = args.input;

            groupData.denomination = input.denomination || groupData.denomination;

            return groupData.save();
        })
        .then(updatedGroup => updatedGroup)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

function deleteGroup(root, args, context) {
    return GroupModel.findById(args._id).exec()
        .then((foundGroup) => {
            if (!foundGroup) {
                throw new Error('Group Not Found');
            }

            return foundGroup.remove();
        })
        .then(removedGroup => removedGroup)
        .catch((error) => {
            logger.error(error);
            return error;
        });
}

module.exports = {
    createGroup: createGroup,
    updateGroup: updateGroup,
    deleteGroup: deleteGroup
}
