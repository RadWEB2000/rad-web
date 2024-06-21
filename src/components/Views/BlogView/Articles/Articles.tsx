import {ReguralBlogCard as Card} from "cards/index";
import {tArticles} from "v-blog/Articles/Articles.models";

import css from "v-blog/Articles/Articles.module.scss"
export default function Articles({cards}:tArticles){
    console.log(cards.length)
    return (
        <>
            <ul
                className={css.wrapper}
            >
                {cards.slice(0,9).map((item, index) => {
                    return (
                        <Card
                            {...item}
                            key={index}
                        />
                    )
                })}
            </ul>
           
        </>
    )
}