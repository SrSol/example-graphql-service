module.exports = `
    type CourseTeacher {
        _id: ID
        name: String
        last_name: String
    }

    type Course {
        _id: ID
        denomination: String
        teachers: [CourseTeacher]
    }

    input CourseCreate {
        denomination: String!
    }

    input CourseUpdate {
        _id: ID!
        denomination: String
    }
`;
