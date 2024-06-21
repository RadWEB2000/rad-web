import {tStatistics} from "v-projects/Statistics/Statistics.models"
import css from "v-projects/Statistics/Statistics.module.scss";

export default function Statistics({title,content,cards}:tStatistics){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.box}
            >
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            {
                cards &&
                <ul
                    className={css.cards}
                >
                    {
                        cards.map(({content, title}, index) => {
                            return(
                                <li 
                                    className={css.card}
                                    key={index}
                                >
                                    <p
                                        className={css.card__content}
                                        dangerouslySetInnerHTML={{__html:content}}
                                    />
                                    <h3
                                        className={css.card__title}
                                        dangerouslySetInnerHTML={{__html:title}}
                                    />
                                </li>
                            )
                            })
                    }
                </ul>
            }
        </div>
    )
}