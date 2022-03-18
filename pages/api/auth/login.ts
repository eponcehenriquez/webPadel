import useHandler from '../../../backend/middleware/handler'
import auth from '../../../backend/middleware/auth'
import passport from '../../../backend/lib/passport'


export default useHandler()
    .use(auth)
    .post(
        passport.authenticate('local'), (req: any, res) => {
            res.json({ user: req.user.username })
        }
    )