import css from "v-home/HowTo/HowTo.module.scss";
import {tHowTo} from "v-home/HowTo/HowTo.models";
import { HowToCard } from "..";
export default function HowTo({cards,title}:tHowTo){
    return (
        <section className={css.wrapper} >
            <h2 className={css.title} >{title}</h2>
            <ul className={css.cards} >
                {cards.map(({content,number,title}, index) => {
                    if(index !== 0){
                        return (
                            <>
                                <span className={css.line} />
                                <HowToCard
                                    content={content}
                                    key={number}
                                    number={number}
                                    title={title}
                                />
                            </>
                        )
                    }else {
                        return (
                            <HowToCard
                                content={content}
                                key={number}
                                number={number}
                                title={title}
                            />
                        )
                    }
                })}
            </ul>            
        </section>
    )
}