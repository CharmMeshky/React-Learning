import { createContext } from "react";

export const menuData = createContext({
    clickMenu : Boolean,
    setMenu : () => {}
})

export const countData = createContext({
    count: Number,
    handleClickButton: () => {},
    handleMouseCount: () => {},
})

export const commentsClick = createContext({
    clickComments: {
        isClicked:Boolean,
        number:Number
    },
    setClickComments: () => {}
})