import dotenv from 'dotenv'

dotenv.config()

export const Constant = {
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME,
    PORT:process.env.PORT,

    COURSE_MODEL: "Course",
    STUDENT_MODEL: "Student",
    PRODUCT_MODEL: "Product",
    TEACHER_MODEL: "Teacher"
}

