module.exports = `
    type Mutation {
        createTeacher(input: TeacherCreate): Teacher
        updateTeacher(input: TeacherUpdate): Teacher
        deleteTeacher(_id: ID!): Boolean

        createStudent(input: StudentCreate): Student
        updateStudent(input: StudentUpdate): Student
        deleteStudent(_id: ID!): Boolean

        createGroup(input: GroupCreate): Group
        updateGroup(input: GroupUpdate): Group
        deleteGroup(_id: ID!): Boolean

        createCourse(input: CourseCreate): Course
        updateCourse(input: CourseUpdate): Course
        deleteCourse(_id: ID!): Boolean
    }
`;
