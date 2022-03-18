import { 
    WebpayPlus, 
    Options,
    IntegrationApiKeys,
    IntegrationCommerceCodes,
    Environment
} from 'transbank-sdk'
import useHandler from "../../backend/middleware/handler"
import { IBasket } from '../../types'


const tx = new WebpayPlus.Transaction(
    new Options(
        IntegrationCommerceCodes.WEBPAY_PLUS, 
        IntegrationApiKeys.WEBPAY, 
        Environment.Integration
    )
)


export default useHandler()
    .post(async (req, res) => await Pagar(req, res))


const Pagar = async (req, res) => {
    const basket: IBasket = req.body.basket
    let amount = 0
    basket.map((item) => {
        if (
            item.hour === "17:00" || 
            item.hour === "18:30" || 
            item.hour === "20:00" ||
            item.hour === "21:30" ||
            item.hour === "23:00"
        ) {
            amount = amount + 20000
        } else {
            amount = amount + 12000
        }
    })

    if (amount === 0) {
        throw new Error("Debes hacer reservaciones antes de hacer un pago")
    }

    console.log(amount)

    const buyOrder  = "padel-vip-" + Math.floor(Math.random() * 100000) + 1
    const sessionId = "s-" + Math.floor(Math.random() * 100000) + 1
    const returnUrl = `${process.env.URL}/confirmar-pago`
    
    const response = await tx.create(
        buyOrder, 
        sessionId,
        amount, 
        returnUrl
    )
    
    return res.status(200).json(response)

}