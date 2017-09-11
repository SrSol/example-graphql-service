module.exports = `
    type Query {
        teacher(_id: ID!): Teacher
        teacherList: [Teacher]

        student(_id: ID!): Student
        studentList: [Student]

        group(_id: ID!): Group
        groupList: [Group]

        course(_id: ID!): Course
        courseList: [Course]
    }
`;
