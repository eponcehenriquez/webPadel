import crypto from 'crypto'
import { Sql } from '../../config/db'


export const createUserAdmin = async (req, username, password) => {
    // create the user and save the salt and hashed password
    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex')

    try {
        await Sql.query("INSERT INTO admin SET ?", {
            admin: 1,
            username,
            hash,
            salt
        })
        await Sql.end()
        
    } catch (error) {
        console.error(error.message)
        return error
    }

    const user = {
        admin: 1,
        username,
        hash,
        salt
    }

    console.log('user creado')

    // despues eliminar este return
    return user
}


export async function findAdminByUsername(req, username) {
    console.log('leyendo base de datos')
    const user = await Sql.query("SELECT * FROM admin WHERE username = ?", [username])
    await Sql.end()
    return user[0]
}


// Compare the password of an already fetched user (using `findUserByUsername`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
    const inputHash = crypto
        .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
        .toString('hex')
    const passwordsMatch = user.hash === inputHash
    return passwordsMatch
}