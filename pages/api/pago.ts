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
    switch (req.method) {
        case "POST":
            return await Pagar(req, res)
    
        default:
            return res.status(405).end()
    }
}


const Pagar = async (req, res) => {
    try {
        const { cantidadHoras } = req.body

        const buyOrder  = "padel-vip-" + Math.floor(Math.random() * 100000) + 1
        const sessionId = "s-" + Math.floor(Math.random() * 100000) + 1
        const amount    = 15990 * cantidadHoras
        const returnUrl = `${process.env.URL}/confirmar-pago`
        
        const response = await tx.create(
            buyOrder, 
            sessionId,
            amount, 
            returnUrl
        )
        
        return res.status(200).json(response)
    } catch (error) {
        console.error(error)
        return res.status(500).end(error.message)
    }
}