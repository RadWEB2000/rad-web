"use client"
import { createContext, useState } from "react";

type tExpandMenuContext = {
    isOpen:boolean;
    toggle:() => void;
    close:() => void;
}

type tExpandMenuProvider = {
    children:React.ReactNode;
}

export const ExpandMenuContext = createContext<tExpandMenuContext>({
    isOpen:false,
    toggle:() => false,
    close:() => false
})



export default function ExpandMenuProvider({children}:tExpandMenuProvider) {

    const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <ExpandMenuContext.Provider
            value={{
                close:() => setOpenMenu(false),
                isOpen:isOpenMenu,
                toggle:() => setOpenMenu(!isOpenMenu)
            }}
        >
            {children}
        </ExpandMenuContext.Provider>
    )
}