// @ts-check
import * as Joi from 'joi'

import { issueToken } from './../../lib/utils/jwtService'
import { ValidationError, RecordNotFoundError } from './../../lib/errors'

const validator = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

const checkCredentials = async (username, password) => {
    const user = {
        id: 1,
        username: 'admin',
        password: '123456'
    }

    if (user.username !== username) {
        throw new RecordNotFoundError('User not found.')
    }

    if (user.username === username && user.password === password) {
        return user
    }

    throw new ValidationError('Username or password invalid.')
}

const login = async ({ payload }, _) => {
    Joi.attempt(payload, validator)

    const { username, password } = payload

    const user = await checkCredentials(username, password)
    const token = issueToken(payload)

    user.token = token

    return user
}

const register = async ({ payload }, _) => {
    return {
        // token
    }
}

export const authController = { login, register }
