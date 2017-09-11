module.exports = `
    type Student {
        _id: ID
        name: String
        last_name: String
        group: Group
    }

    input StudentCreate {
        name: String!
        last_name: String
        group: ID
    }

    input StudentUpdate {
        _id: ID!
        name: String
        last_name: String
        group: ID
    }
`;
