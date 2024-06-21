import Link from "next/link";
import {tDetails} from "v-project/Details/Details.models";
import css from "v-project/Details/Details.module.scss"

export default function Details({}:tDetails){
    return(
        <section
            className={css.wrapper}
        >
            <div
                className={css.column}
            >
                <h3
                    className={css.title}
                >
                    Zakres działań:
                </h3>
                <ul
                    className={css.scope}
                >
                    <li className={css.scope__item} >
                        Realizacja strony internetowej
                    </li>
                    <li className={css.scope__item} >
                        Kampania SEO
                    </li>
                    <li className={css.scope__item} >
                        Realizacja video
                    </li>
                </ul>
            </div>
            <div
                className={css.column}
            >
                <h3
                    className={css.title}
                >
                    Użyte technologie:
                </h3>
                <ul
                    className={css.technologies}
                >
                    <li className={css.technology}>
                        HTML
                    </li>
                    <li className={css.technology}>
                        CSS
                    </li>
                    <li className={css.technology}>
                        SCSS
                    </li>
                    <li className={css.technology}>
                        JavaScript
                    </li>
                    <li className={css.technology}>
                        DaVinci Resolve
                    </li>
                    <li className={css.technology}>
                        React
                    </li>
                    <li className={css.technology}>
                        NextJS
                    </li>
                    <li className={css.technology}>
                        WordPress
                    </li>
                </ul>
            </div>
            <div
                className={css.column}
            >
                <h3
                    className={css.title}
                >
                    Szczegóły:
                </h3>
                <ul
                    className={css.details}
                >
                    <li
                        className={css.detail}
                    >
                        <strong
                            className={css.detail__label}
                        >
                            Data realizacji
                        </strong>
                        <p
                            className={css.detail__content}
                        >
                            21 kwietnia 2024
                        </p>
                    </li>
                    <li
                        className={css.detail}
                    >
                        <strong
                            className={css.detail__label}
                        >
                            Strona internetowa
                        </strong>
                        <Link 
                            className={css.detail__content}
                            href="#"
                        >
                            mechanik-ludomy.pl
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}