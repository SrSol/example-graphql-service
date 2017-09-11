/**
 * Get the fields to select in the mongo query
 * @param  {object} _info.fieldNodes
 */
module.exports = (fieldNodes) => {
    return fieldNodes.selectionSet.selections.reduce((projections, selection) => {
        const returnProjections = projections;
        returnProjections[selection.name.value] = 1;
        return returnProjections;
    }, {});
}
