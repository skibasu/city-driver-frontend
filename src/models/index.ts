export interface ILocation {
    type: ["cash", "online", "card", "free"]
    finishedAt: Date | string
    createdAt: Date | string
    isFinish: boolean
    country: string
    street: string
    roomNumber?: number
    city: string
    price: number
    petrol?: number
    note?: string
    user: string
    workday: string
}

export interface IDelivery {
    _id: string
    type: string
    finishedAt: string | Date
    createdAt: string | Date
    isFinish: boolean
    street: string
    roomNumber: number
    city: string
    price: number
    petrol: number
    note: string
    location: ILocation
}
