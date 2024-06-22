"use client"

import { ExpandMenuContext } from "context/ExpandMenuContext"
import { useContext } from "react"

export default function ExpandButton(){
    // const {isOpen, toggle} = useContext(ExpandMenuContext)
    return (
        <button
            // data-open={isOpen}
            // onClick={toggle}
        >
            |||
            <span/>
            <span/>
            <span/>
        </button>
    )
}