import useHandler from '../../../backend/middleware/handler'
import auth from '../../../backend/middleware/auth'


export default useHandler()
    .use(auth)
    .post((req: any, res) => {
        req.logOut()
        res.status(204).end()
    })

