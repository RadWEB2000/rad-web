import {PrimaryIndustryCard as Card} from "cards/index"
import {tIndustries} from "v-services/Industries/Industries.models"
import css from "v-services/Industries/Industries.module.scss"
export default function Industries({title, buttonCard,cards, slogan}:tIndustries){
    return (
        <div className={css.wrapper} >
            <header className={css.box} >
                <h2
                    className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <h3
                    className={css.slogan} 
                    dangerouslySetInnerHTML={{__html:slogan}}
                />
            </header>
            <ul className={css.cards}  >
                {
                    cards.map(({content,icon,title,uri}) => {
                        return (
                            <Card
                                button={{
                                    label:buttonCard,
                                    uri:uri
                                }}
                                content={content}
                                icon={icon}
                                key={title}
                                title={title}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

