import getHandler from '../../../backend/middleware/handler'
import { createUserAdmin } from '../../../backend/lib/db'


export default getHandler()
    .post(async (req: any, res) => {
        const { username, password } = req.body
        const user = await createUserAdmin(req, username, password)
        res.status(200).json({ success: true, user })
        console.log('se ha creado usuario admin')
    })

