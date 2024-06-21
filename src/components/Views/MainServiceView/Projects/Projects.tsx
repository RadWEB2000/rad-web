import {SecondaryProjectCard as Card} from "cards/index"
import {tProjects} from "v-m-service/Projects/Projects.models"
import css from "v-m-service/Projects/Projects.module.scss"

export default function Projects({cards,title, content}:tProjects){
    return (
        <div className={css.wrapper} >
            <section className={css.box} >
                <h2
                    className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.content} 
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            <ul className={css.cards} >
                {
                    cards.map((item,index) => {
                        return (
                            <Card
                                {...item}
                                key={index}
                            />
                        )
                    })
                }
                
            </ul>
        </div>
    )
}