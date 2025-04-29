import { createContext } from "react";

export const tackdata = createContext({
    Tack : [], 
    setTack : () => {}
})

export const buttonsClick = createContext({
    done : Boolean,
    fClose : () => {},
    fCheck : () => {},
    id : Number,
    className : ""
})