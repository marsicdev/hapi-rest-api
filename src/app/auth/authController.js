// @ts-check
import * as Joi from 'joi'
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

const exec = async params => {
    Joi.attempt(params, validator)

    const { username, password } = params
    const user = await checkCredentials(username, password)

    return user
}

export const authController = { exec, validator }
