module.exports = `
    type GroupStudent {
        _id: ID
        name: String
        last_name: String
    }

    type Group {
        _id: ID
        denomination: String
        students: [GroupStudent]
    }

    input GroupCreate {
        denomination: String!
    }

    input GroupUpdate {
        _id: ID!
        denomination: String
    }
`;
