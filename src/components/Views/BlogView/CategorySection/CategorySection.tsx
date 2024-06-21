import {PrimaryButton as Button} from "buttons/index";
import {ReguralBlogCard as Card }  from "cards/index";
import { tCategorySection } from "v-blog/CategorySection/CategorySection.models";
import css from "v-blog/CategorySection/CategorySection.module.scss";
export default function CategorySection({title, button, card_button, cards}:tCategorySection){
    return (
        <section className={css.wrapper} >
            <div className={css.head} >
                <h2
                    className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <Button
                    label={button.label}
                    uri={button.uri}
                />
            </div>
            <ul  className={css.cards} >
                {
                    cards.slice(0,3).map((item, index) => {
                        return (
                            <Card
                                {...item}
                                key={item.title}
                            />
                        )
                    })
                }
                
            </ul>
        </section>
    )
}