import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { NextConnect } from 'next-connect'


export default function getHandler(): NextConnect<NextApiRequest, NextApiResponse<any>> {
    return nextConnect<NextApiRequest, NextApiResponse>({
        onError(error, req, res) {
            console.error(error.message)
            res.status(501).json({ error: `Error: ${error.message}` });
        },
        onNoMatch(req, res) {
            res.status(405).json({ error: `Method ${req.method} Not Allowed` });
        },
    })
}