const serverData = {
    path: "http://localhost:3000",
    endpoints: {
        POST: {
            registerStudent: "/register_student"
        },
        GET: {
            allStudents: "/all_students"
        }
    }
};

export default serverData;