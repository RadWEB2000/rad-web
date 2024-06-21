import {tCard, tMission} from "v-about/Mission/Mission.models"
import css from "v-about/Mission/Mission.module.scss"

function Card({title,index, content}:tCard){

    function getIndex(index:number):string {
        if(index < 10){
            return `0${index}`
        }
        else {
            return `${index}`
        }
    }

    return(
        <li className={css.card} >
            <span  className={css.card__index}>
                {getIndex(index + 1)}
            </span>
            <div  className={css.card__box}>
                <h3
                     className={css.card__title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                     className={css.card__content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </div>
        </li>
    )
}


export default function Mission({title, cards}:tMission){
    return(
        <section  className={css.wrapper}>
            <h2
                 className={css.title}
                dangerouslySetInnerHTML={{__html:title}}
            />
            <ul  className={css.cards}>
                {cards.map(({title,content},index) => {
                    return <Card
                        title={title}
                        content={content}
                        index={index}
                        key={index}
                    />
                })}
            </ul>
        </section>
    )
}