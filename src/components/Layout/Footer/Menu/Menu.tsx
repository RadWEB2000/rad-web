import { tMenu } from "footer/Menu/Menu.models";
import Link from "next/link";
import css from "footer/Menu/Menu.module.scss";

export default function Menu({columns}:tMenu){
    return(
        <menu className={css.wrapper} >
            {
                columns.map(({title, items}, index) => {
                    return(
                        <li className={css.column} key={index}>
                            <strong className={css.title} >{title}</strong>
                            <ul className={css.items} >
                                {items.map(({label,uri},index) => {
                                    return(
                                        <li className={css.item}  key={index}>
                                            <Link className={css.link}  href="#" >
                                                {label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })
            }
        </menu>
    )
}