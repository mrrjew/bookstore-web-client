import { ReactElement } from "react"

export type NavSoials = {
    name:string,
    href:string,
    icon: ReactElement<HTMLElement>
    quantity?:number
}

export type Navigation = {
    name:string
    href:string
}
