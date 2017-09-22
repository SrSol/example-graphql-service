module.exports = `
    type Teacher {
        _id: ID
        name: String
        last_name: String
        groups: [Group]
        courses: [Course]
    }

    input TeacherGroups {
        _id: ID
    }

    input TeacherCourses {
        _id: ID
    }

    input TeacherCreate {
        name: String!
        last_name: String
        groups: [TeacherGroups]
        courses: [TeacherCourses]
    }

    input TeacherUpdate {
        _id: ID!
        name: String
        last_name: String
        groups: [TeacherGroups]
        courses: [TeacherCourses]
    }
`;
