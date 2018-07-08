import jwt from 'jsonwebtoken'

export const issueToken = user => {
    const secret = 'NeverShareYourSecret'
    return jwt.sign({ id: user.id }, secret)
}
