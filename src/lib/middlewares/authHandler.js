// @ts-check
export const authHandler = credentials => {
    // Run any checks here to confirm we want to grant these credentials access
    return {
        isValid: true,
        credentials // request.auth.credentials
    }
}
