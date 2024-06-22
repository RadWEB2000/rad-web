"use client"

import { ExpandMenuContext } from "context/ExpandMenuContext"
import { useContext } from "react"
import css from "l-nav/ExpandButton/ExpandButton.module.scss";


export default function ExpandButton(){
    const {isOpen, toggle} = useContext(ExpandMenuContext);
    return (
        <button
            className={css.wrapper}
            data-open={isOpen}
            onClick={toggle}
        >
            <span className={css.line} />
            <span className={css.line} />
            <span className={css.line} />
        </button>
    )
}