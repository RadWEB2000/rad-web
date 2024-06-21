import {PrimaryButton} from "buttons/index";
import {HomeServiceCard as Card} from "cards/index";
import { tServices } from "v-home/Services/Services.models";
import css from "v-home/Services/Services.module.scss"

export default function Services({button,cards,content,title}:tServices){
    return(
        <div className={css.wrapper} >
            <section className={css.box} >
                <header className={css.title__box} >
                    <h2 className={css.title} >{title}</h2>
                </header>
                <div className={css.button} >
                    <PrimaryButton
                        {...button}
                    />
                </div>
                <p
                    className={css.content} 
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            <ul className={css.cards}>
                {cards?.map((item,index) => {
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