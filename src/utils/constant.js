import dotenv from 'dotenv'

dotenv.config()

export const Constant = {
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME,
    PORT:process.env.PORT,

    COURSE_MODEL: "Course",
    STUDENT_MODEL: "Student",
    USER_MODEL: "User",
    PRODUCT_MODEL: "Product",
    TEACHER_MODEL: "Teacher", 
    ACCESS_TOKEN_SECRET_KEY:process.env.ACCESS_TOKEN_SECRET_KEY,
    ACCESS_TOKEN_EXPIRATION_TIMESTAMP:process.env.ACCESS_TOKEN_EXPIRATION_TIMESTAMP,
    REFRESH_TOKEN_SECRET_KEY:process.env.REFRESH_TOKEN_SECRET_KEY,
    REFRESH_TOKEN_EXPIRATION_TIMESTAMP:process.env.REFRESH_TOKEN_EXPIRATION_TIMESTAMP
}

