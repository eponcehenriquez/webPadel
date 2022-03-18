import Iron from '@hapi/iron'


/**
 * se encripta la informacion y se entrega un token, 
 * se crean custom claims aca?
 * @param session 
 * @param secret 
 * @returns token type string
 */
export async function createLoginSession(session, secret) {
    const createdAt = Date.now()
    const obj = { ...session, createdAt }
    const token = await Iron.seal(obj, secret, Iron.defaults)

    return token
}


/**
 * se desencripta el token y se obtiene la sesion
 * se valida la sesion segun su tiempo de vida
 * @param token 
 * @param secret 
 * @returns session
 */
export async function getLoginSession(token, secret) {
    const session = await Iron.unseal(token, secret, Iron.defaults)
    const expiresAt = session.createdAt + session.maxAge * 1000

    // Validate the expiration date of the session
    if (session.maxAge && Date.now() > expiresAt) {
        throw new Error('Session expired')
    }

    return session
}