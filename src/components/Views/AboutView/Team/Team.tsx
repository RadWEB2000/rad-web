import {tTeam} from "v-about/Team/Team.models";
import {TeamCards } from "v-about/index";
import css from "v-about/Team/Team.module.scss";

export default function AboutUs({cards,content,title}:tTeam){
    return(
        <div className={css.wrapper}>
            <section className={css.box}>
                <header className={css.details}>
                    <h2 className={css.title}>{title}</h2>
                </header>
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            <TeamCards cards={cards} />
        </div>
    )
}