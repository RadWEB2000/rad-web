import { RegularPersonCard as Card} from "cards/index"
import { tCards } from "v-about/Team/Cards/Cards.models"
import css from  "v-about/Team/Cards/Cards.module.scss";

export default function Cards({cards}:tCards){
    return(
        <div className={css.wrapper}>
            <ul className={css.box}>
                {cards.map((item,index) => {
                    return(
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