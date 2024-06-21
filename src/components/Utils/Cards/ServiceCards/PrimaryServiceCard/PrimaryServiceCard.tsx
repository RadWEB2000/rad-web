import Link from "next/link";
import {tPrimaryServiceCard} from "c-service/PrimaryServiceCard/PrimaryServiceCard.models"
import css from "c-service/PrimaryServiceCard/PrimaryServiceCard.module.scss";
export default function PrimaryServiceCard({button,cards,content,title}:tPrimaryServiceCard){
    return(
        <li 
            className={css.wrapper} 
        >
            <span 
                className={css.counter} 
            >
                {`${cards.current}/${cards.all}`}
            </span>
            <div>
                <h3 
                    className={css.title}  
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p 
                    className={css.content}  
                    dangerouslySetInnerHTML={{__html:content}} 
                />
            </div>
            <Link 
                className={css.button}  
                href={button.uri}
            >
                {button.label}
            </Link>
        </li>
    )
}