import passport from 'passport'
import LocalStrategy from 'passport-local'
import { findAdminByUsername, validatePassword } from './db'


/**
 * guarda el username, user contiene toda la info de user
 * realmente guardare user para evitar db calls en cada request
 */
passport.serializeUser(function (user, done) {
    console.log("serializando user en passsport")
    done(null, user)
})


/**
 * coloca user en req.user, evitare db calls en exceso
 */
passport.deserializeUser(async function (req, user, done) {
    console.log("des-serializando user en passsport")
    done(null, user)
})


/**
 * local strategy busca el usuario por username, luego compara
 * las passwords
 */
passport.use(
    new LocalStrategy(
        { passReqToCallback: true },
        async (req, username, password, done) => {
            console.log("Ejecutando passport local strategy")
            const user: any = await findAdminByUsername(req, username)
            if (!user || !validatePassword(user, password)) {
                done(null, null)
            } else {
                done(null, user)
            }
        }
    )
)


export default passport