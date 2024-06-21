"use client"
import { RegularPersonCard as Card} from "cards/index"
import { tCards } from "v-home/AboutUs/Cards/Cards.models"
import css from  "v-home/AboutUs/Cards/Cards.module.scss";

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