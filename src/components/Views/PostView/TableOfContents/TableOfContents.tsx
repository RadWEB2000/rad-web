import Link from "next/link";
import {tTableOfContents} from "v-post/TableOfContents/TableOfContents.models";
import css from "v-post/TableOfContents/TableOfContents.module.scss";

export default function TableOfContents({items,title}:tTableOfContents){
    return(
        <div className={css.wrapper} >
            <p
                 className={css.title} 
                dangerouslySetInnerHTML={{__html:title}}
            />
            <ul className={css.items} >
                {items.map(({label,uri}, index) => {
                    return(
                        <li className={css.item}  key={index}>
                            <Link
                                className={css.item__link} 
                                dangerouslySetInnerHTML={{__html:label}}
                                href={uri}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}