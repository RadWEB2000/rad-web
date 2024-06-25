"use client"
import {tBigMenu} from "l-nav/BigMenu/BigMenu.models"
import Link from "next/link"
import { FaArrowRight as RightArrow, FaArrowLeft as LeftArrow } from "react-icons/fa6";
import css from "l-nav/BigMenu/BigMenu.module.scss";
import { useContext, useState } from "react";
import { ExpandMenuContext } from "context/ExpandMenuContext";

export default function BigMenu({menu, blog}:tBigMenu){
    const {isOpen} = useContext(ExpandMenuContext);
    const [openSubmenu,handleOpenSubmenu] = useState<boolean>(false);
    return (
        <menu
            data-open={isOpen}
            className={css.wrapper}
        >
            <ul
                className={css.categories}
            >
                {menu.map(({label,uri,submenu}, index) => {
                    return (
                       <li 
                            className={css.category}
                            key={index} 
                        >
                            <Link 
                                className={css.category__label}
                                href={uri} 
                            >
                                {label}
                            </Link>
                            {
                                submenu &&
                                <button
                                    className={css.category__button}
                                    onClick={() => handleOpenSubmenu(!openSubmenu)}
                                >
                                    <RightArrow/>
                                </button>
                            }
                       </li>
                    )
                })}
            </ul>
            <ul
                className={css.subcategories}
                data-submenu={openSubmenu}
            >
                    <button
                        className={css.return}
                        onClick={() => handleOpenSubmenu(false)}
                    >
                        <i
                            className={css.return__icon}
                        >
                        <LeftArrow/>
                        </i>
                        <span
                            className={css.return__label}
                        >
                            Wróć
                        </span>
                    </button>
                {blog.map(({label, uri}, index) => {
                    return (
                        <Link 
                            className={css.subcategory}
                            href={uri} 
                            key={index}
                        >
                            {label}
                        </Link>
                    )
                })}
            </ul>
            
        </menu>
    )
}