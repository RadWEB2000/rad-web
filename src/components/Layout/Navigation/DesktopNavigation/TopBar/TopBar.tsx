import Link from "next/link";
import {tTopBar} from "l-d-nav/TopBar/TopBar.models"
import ExpandButton from "l-nav/ExpandButton";
import css from "l-d-nav/TopBar/TopBar.module.scss"
export default function TopBar({brand,menu}:tTopBar){
    return (
        <nav
            className={css.wrapper}
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
                <ExpandButton/>
            </div>
        </nav>
    )
}