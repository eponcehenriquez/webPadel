import useHandler from '../../../backend/middleware/handler'
import auth from '../../../backend/middleware/auth'


export default useHandler()
    .use(auth)     
    .use((req: any, res, next) => {
        // middleware to check if user is authenticated
        if (!req.user) res.status(401).send('unauthenticated')
        else next()
    })
    .get((req: any, res) => {
        // console.log(req.user)
        res.json({ user: req.user.username })
    }) 
