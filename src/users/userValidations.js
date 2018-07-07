import joi from 'joi'

export const userValidations = {
    // GET /users
    listUsers: {
        headers: {
            'content-type': joi.string().required()
        },
        options: {
            allowUnknown: true
        }
    },
    // GET /users/:userId
    user: {
        params: {
            userId: joi.string().required()
        },
        headers: {
            'content-type': joi.string().required()
        },
        options: {
            allowUnknown: true
        }
    },
    // POST /users
    createUser: {
        payload: {
            name: joi.string().required(),
            username: joi.string().optional(),
            age: joi.number().required()
        },
        headers: {
            'content-type': joi.string().required()
        },
        options: {
            allowUnknown: true
        }
    }
}
