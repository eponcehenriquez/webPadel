import type { NextApiRequest, NextApiResponse } from 'next'
import { 
    WebpayPlus, 
    Options,
    IntegrationApiKeys,
    IntegrationCommerceCodes,
    Environment
} from 'transbank-sdk'


const tx = new WebpayPlus.Transaction(
    new Options(
        IntegrationCommerceCodes.WEBPAY_PLUS, 
        IntegrationApiKeys.WEBPAY, 
        Environment.Integration
    )
)


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method != "POST") return res.status(405).end()

    try {
        const { token } = req.body

        const response  = await tx.commit(token)

        return res.status(200).json(response)
    } catch (error) {
        console.error(error)
        return res.status(500).end(error.message)
    }
}