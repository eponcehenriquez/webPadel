import type { NextApiRequest, NextApiResponse } from 'next'
import { Sql } from '../../config/db'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            return await GetAll(req, res)
    
        default:
            return res.status(405).end()
    }
}


const GetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const result = await Sql.query('SELECT * FROM canchas')
        return res.status(200).json(result)
    } catch (error) {
        console.error(error)
        return res.status(500).end(error.message)
    }
}