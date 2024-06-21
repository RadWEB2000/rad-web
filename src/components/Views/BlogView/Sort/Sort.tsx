"use client";
import {tMethodSortArray, tMethodSort} from "v-blog/Sort/Sort.models";
import { useState } from "react";
import css from "v-blog/Sort/Sort.module.scss";
import {AnimatePresence, motion} from "framer-motion";
import { FaSort as SortIcon } from "react-icons/fa6";


export default function Sort(){

    const sortMethods:tMethodSortArray[] = [
        {
            label:"Domyślnie",
            methodSort:"default"
        },
        {
            label:"Od najstarszego",
            methodSort:"old"
        },
        {
            label:"Od najnowszego",
            methodSort:"new"
        },
        {
            label:"A-Z",
            methodSort:"az"
        },
        {
            label:"Z-A",
            methodSort:"za"
        },
    ]

    const [currentSort, setCurrentSort] = useState<tMethodSortArray>({
        label:"Domyślnie",
        methodSort:"default"
    });

    console.log(currentSort)

    const [isExpand, setIsExpand] = useState<boolean>(false)

    return (
        <div className={css.wrapper} onMouseLeave={() => setIsExpand(false)}>
            <button 
                className={css.current}
                onClick={() => setIsExpand(!isExpand)}
            >
                <span>
                    {currentSort.label}
                </span>
                <i>
                    <SortIcon/>
                </i>
            </button>
            {
                isExpand &&
                <AnimatePresence>
                    <motion.ul 
                        animate={{
                            opacity:1,
                            visibility:"visible"
                        }}
                        className={css.cards}
                        initial={{
                            opacity:0,
                            visibility:"hidden"
                        }}
                    >
                        {sortMethods.map(({label, methodSort}, index) => {
                            return (
                                <li className={css.card} key={index}>
                                    <button
                                        className={css.method}
                                        onClick={() => setCurrentSort({label, methodSort})}
                                    >
                                        {label}
                                    </button>
                                </li>
                            )
                        })}
                    </motion.ul>
                </AnimatePresence>
            }
            
        </div>
    )
}