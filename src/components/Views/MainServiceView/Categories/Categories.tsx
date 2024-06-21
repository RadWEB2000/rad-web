import Link from "next/link";
import {tCategories} from "v-m-service/Categories/Categories.models";
import css from "v-m-service/Categories/Categories.module.scss";
import { LuLink as Icon} from "react-icons/lu";

export default function Categories({cards,content,title}:tCategories){
    return(
        <div className={css.wrapper} >
            <section className={css.box} >
                <h2
                    className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.content} 
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            <ul className={css.cards} >
                {cards.map(({content,title,uri},index) => {
                    return(
                        <li className={css.card}  key={index}>
                            <section className={css.card__box} >
                                <h3
                                    className={css.card__title} 
                                    dangerouslySetInnerHTML={{__html:title}}
                                />
                                <p
                                    className={css.card__content} 
                                    dangerouslySetInnerHTML={{__html:content}}
                                />
                            </section>
                            <div
                                 className={css.card__button__box} 
                            >
                                <Link 
                                    className={css.card__button} 
                                    href={uri} 
                                >
                                    <Icon/>         
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}