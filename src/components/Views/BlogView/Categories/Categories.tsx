import Link from "next/link"
import {tCategories, tCategory} from "v-blog/Categories/Categories.models"
import css from "v-blog/Categories/Categories.module.scss";

function Category({label,uri}:tCategory){
    return (
        <Link className={css.card} href={uri}>
            {label}
        </Link>
    )
}

export default function Categories({cards}:tCategories){
    return (
        <ul className={css.wrapper}>
            {cards.map((item,index) => {
                return (
                    <Category
                        {...item}
                        key={index}
                    />
                )
            })}
        </ul>
    )
}