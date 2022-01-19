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

export interface IUser {
    isLogin: boolean
    name: string | null
    surname: string | null
    email: string | null
    avatarUrl: string | null
    token: string | null
    loading: boolean
    error: string | null
}
export interface IAuthState {
    user: IUser
}

export interface IUserResponse {
    success: boolean
    token: string
    email: string
    name: string
    surname: string
    avatarUrl: string
}
export interface IUserRequest {
    password: string
    email: string
}
