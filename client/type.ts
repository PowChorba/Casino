export interface ProvedorCardType {
    name: string
    image: string
    games: number
    activeProvider: string
}

export interface GameCardType {
    title: string
    img: string
    proveedor: string
}

export interface GameCardComplete {
  _id: string;
  title: string;
  proveedor: string;
  img: string;
  iframe: string;
}

export interface UserRegister {
  email: string
  password: string
  nickname: string
}

export interface UserLogin {
  email: string
  password: string
}

export interface Register {
  nickname: string
  password: string
  email: string
}