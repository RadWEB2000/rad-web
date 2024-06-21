import {SecondaryPersonCard as Card} from "cards/index"
import {tSpecialists} from "v-project/Specialists/Specialists.models"
import css from "v-project/Specialists/Specialists.module.scss"

export default function Specialists({cards,title}:tSpecialists){
    return(
        <div
            className={css.wrapper}
        >
            <h2
                className={css.title}
                dangerouslySetInnerHTML={{__html:title}}
            />
            <ul
                className={css.cards}
            >
                {cards.map((item, index) => {
                    return (
                        <Card
                            {...item}
                            key={index}
                        />
                    )
                })}
            </ul>
        </div>
    )
}