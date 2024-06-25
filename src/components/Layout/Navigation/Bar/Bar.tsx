"use client"
import Link from "next/link";
import {tBar} from "l-nav/Bar/Bar.models"
import Button from "l-nav/Button";
import css from "l-nav/Bar/Bar.module.scss"
import { ExpandMenuContext } from "context/ExpandMenuContext";
import { useContext } from "react";

export default function Bar({brand,menu}:tBar){
    const {isOpen} = useContext(ExpandMenuContext);

    return (
        <nav
            className={css.wrapper}
            data-open={isOpen}
        >
            <Link 
                className={css.brand}
                href={brand.uri} 
                hrefLang={brand.lang}
                rel="index follow" 
            >
                {brand.label}
            </Link>
            <menu
                className={css.menu}
            >
                
                {menu.map(({label,uri}) => {
                    return (
                        <Link
                            className={css.menu_item}
                            dangerouslySetInnerHTML={{__html:label}}
                            href={uri}
                            key={label}
                        />
                    )
                })}
            </menu>
            <div
                className={css.settings}
            >
                <Button/>
            </div>
        </nav>
    )
}