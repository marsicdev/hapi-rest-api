import { Boom } from 'boom'
import {
    ApplicationError,
    ForbiddenError,
    RecordNotFoundError,
    UnauthorizedError
} from './../errors'
import logger from './../utils/logger'

export const errorHandler = server => {
    server.ext('onPreResponse', (request, h) => {
        const response = request.response
        if (!response.isBoom) {
            return h.continue
        }

        let boomError
        switch (true) {
            case response instanceof ForbiddenError:
                boomError = Boom.forbidden(response.message)
                break
            case response instanceof UnauthorizedError:
                boomError = Boom.unauthorized(response.message)
                break
            case response instanceof RecordNotFoundError:
                boomError = Boom.notFound(response.message)
                break
            case response instanceof ApplicationError:
                boomError = Boom.badRequest(response.message, response.data)
                break
            default:
                boomError = response
                break
        }

        if (boomError.isServer) {
            logger.error(response)
        } else {
            logger.info(response)
        }

        if (boomError.data) {
            boomError.output.payload.data = boomError.data
        }

        return h.response(boomError)
    })
}
