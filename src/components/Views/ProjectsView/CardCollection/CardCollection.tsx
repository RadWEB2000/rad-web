import {SecondaryProjectCard as Card} from 'cards/index';
import {tCardCollection} from "v-projects/CardCollection/CardCollection.models"
import css from "v-projects/CardCollection/CardCollection.module.scss"

export default function CardCollection({title,cards,content}:tCardCollection){
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
                    {cards.map((item,index) => {
                        return (
                            <Card
                                {...item}
                                title={`${item.title} ${index + 1}`}
                                key={index}
                            />
                        )
                    })}
                </ul>
            }
        </div>
    )
}