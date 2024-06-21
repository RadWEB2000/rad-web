import {SecondaryButton as Button} from "buttons/index";
import {PrimaryServiceCard as Card} from "cards/index";
import { tServicesBox } from "v-services/ServicesBox/ServicesBox.models";
import css from "v-services/ServicesBox/ServicesBox.module.scss"

export default function ServicesBox({button,cardButton,cards,content,title}:tServicesBox){
    return (
        <div className={css.wrapper} >
            <section  className={css.box} >
                <header  className={css.head} >
                    <span className={css.line} />
                    <h2
                         className={css.title} 
                        dangerouslySetInnerHTML={{__html:title}}
                    />
                </header>
                <p
                    className={css.content} 
                    dangerouslySetInnerHTML={{__html:content}}
                />
                <div
                    className={css.button}
                >
                    <Button
                        label={button.label}
                        uri={button.uri}
                    />
                </div>
            </section>
            <ul  className={css.cards} >
                {cards.map(({content,title,uri},index) => {
                    return (
                        <Card
                            button={{
                                label:cardButton,
                                uri:uri
                            }}
                            cards={{
                                all:cards.length,
                                current:index + 1
                            }}
                            content={content}
                            key={index}
                            title={title}
                        />
                    )
                })}
                
            </ul>
        </div>
    )
}