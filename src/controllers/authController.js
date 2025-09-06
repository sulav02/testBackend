import { asyncHandler } from "../middlewares/asyncHandler.js";
import User from "../models/User.js";
import { failure, success } from "../utils/response.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { Constant } from "../utils/constant.js";

// register
export const register = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, phone } = req.body
    if (!firstName || !lastName || !password || !email || !phone) {
        return failure(400, "Missting required field", { firstName, lastName, email, password, phone })
    }
    const isUserExist = await User.findOne({ email })
    if (isUserExist) {
        return failure(409, "An User with this email already exist")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const fullName = `${firstName} ${lastName}`
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phone,
        profilePicUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random`
    })

    await newUser.save()
    res.status(201).json(success("User register successfully"))
})

// login
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!password || !email) {
        return failure(400, "Required missing field", { email, password })
    }
    const user = await User.findOne({ email })
    if (!user) {
        return failure(404, "User not found")
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
        return failure(400, "Either email or password is incorrect")
    }
    // token generation 
    const payload = { _id: user._id, role: user.role }
    const accessToken = jwt.sign(payload, Constant.ACCESS_TOKEN_SECRET_KEY, { expiresIn: Constant.ACCESS_TOKEN_EXPIRATION_TIMESTAMP })
    const refreshToken = jwt.sign(payload, Constant.REFRESH_TOKEN_SECRET_KEY, { expiresIn: Constant.REFRESH_TOKEN_EXPIRATION_TIMESTAMP })
    user.refreshToken = refreshToken
    const savedUser = await user.save()
    const updatedUser = await User.findById(savedUser._id)
    res.status(201).json({ ...success("User Login successfully", updatedUser), accessToken, refreshToken })
})

// refresh token
export const getNewAccessToken = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;
    const oldPayload = jwt.verify(refreshToken, Constant.REFRESH_TOKEN_SECRET_KEY)
    const user = await User.findById(oldPayload._id).select("+refreshToken")


    // token generation
    const payload = { _id: oldPayload._id, role: oldPayload.role }
    const accessToken = jwt.sign(payload, Constant.ACCESS_TOKEN_SECRET_KEY, { expiresIn: Constant.ACCESS_TOKEN_EXPIRATION_TIMESTAMP })
    const newRefreshToken = jwt.sign(payload, Constant.REFRESH_TOKEN_SECRET_KEY, { expiresIn: Constant.REFRESH_TOKEN_EXPIRATION_TIMESTAMP })
    user.refreshToken = newRefreshToken
    const savedUser = await user.save()
    res.status(201).json(success("Token created successfully", { accessToken, refreshToken:newRefreshToken }))

})
