import Link from "next/link";
import {tDirectonaryCard} from "c-directonary/DirectonaryCard.models"
import css from "c-directonary/DirectonaryCard.module.scss";

export default function DirectonaryCard({button,content,title}:tDirectonaryCard){
    return(
        <li
            className={css.wrapper}
        >
            <h3
                className={css.title}
                dangerouslySetInnerHTML={{__html:title}}
            />
            <p
                className={css.content}
                dangerouslySetInnerHTML={{__html:content.substring(0,245)}}
            />
            <Link
                className={css.button}
                href={button.uri}
            >
                {button.label}
            </Link>
        </li>
    )
}