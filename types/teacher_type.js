module.exports = `
    type Teacher {
        _id: ID
        name: String
        last_name: String
        groups: [Group]
        courses: [Course]
    }

    input TeacherGroupsCreate {
        _id: ID
    }

    input TeacherCoursesCreate {
        _id: ID
    }

    input TeacherGroupsUpdate {
        _id: ID
    }

    input TeacherCoursesUpdate {
        _id: ID
    }

    input TeacherCreate {
        name: String!
        last_name: String
        groups: [TeacherGroupsCreate]
        courses: [TeacherCoursesCreate]
    }

    input TeacherUpdate {
        _id: ID!
        name: String
        last_name: String
        groups: [TeacherGroupsUpdate]
        courses: [TeacherCoursesUpdate]
    }
`;
