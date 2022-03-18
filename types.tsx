export interface IItem {
    cancha_id: string
    nombre:    string
    img:       string
    precio:    number
    day:       number
    month:     number
    year:      number
    hour:      string
}


export interface ICancha {
    id:           string
    nombre:       string
    descripcion:  string
    image_url:    string
}


export interface ICanchaFormated {
    id:           string
    nombre:       string
    descripcion:  string
    image_url:    string
    date:         number
    day:          number
    month:        number
    year:         number
}


export type IBasket = IItem[] 