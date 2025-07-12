import { createContext } from "react";

const menuData = createContext({
    clickMenu : Boolean,
    setMenu : () => {}
})

export default menuData