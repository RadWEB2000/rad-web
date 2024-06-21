import {tCard} from "v-home/HowTo/Card/Card.models";
import css from "v-home/HowTo/Card/Card.module.scss";

export default function Card({content,number,title}:tCard){

    function getNumber(value:number):string{
        if(value < 10){
            return `0${value}`
        }else {
            return `${value}`
        }
    }

    return(
        <li className={css.wrapper} >
            <span className={css.value} >
                {getNumber(number)}
            </span>
            <h3 className={css.title} >{title}</h3>
            <p
                className={css.content} 
                dangerouslySetInnerHTML={{__html:content}}
            />
        </li>
    )
}