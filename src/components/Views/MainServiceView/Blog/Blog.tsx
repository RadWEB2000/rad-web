import {SecondaryBlogCard as Card} from "cards/index";
import card_img  from "img/card_2.jpg"
import css from "v-m-service/Blog/Blog.module.scss";
export default function Blog(){
    return (
        <div className={css.wrapper} >
            <section className={css.box} >
                <h2 className={css.title} >Co warto przeczytać?</h2>
                <p className={css.content} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate aliquid deleniti sed explicabo odit eum iure autem. Nisi modi ut obcaecati ipsum eligendi placeat quasi vero expedita in maiores. Voluptatem, voluptatum explicabo repudiandae ex sed voluptatibus illo alias rem sunt labore ea praesentium dignissimos laboriosam adipisci omnis distinctio vel facilis quibusdam optio quae fuga! </p>
            </section>
            <ul  className={css.cards} >

                <Card
                   category={{
                    label:"Programowanie",
                    uri:"#"
                   }}
                   image={{
                        alt:"",
                        src:card_img.src,
                        title:""
                   }}
                   release="21 kwietnia 2021"
                   title="Co musisz wiedzieć o dokumentacjach React?"
                   uri="#"
                />
                <Card
                   category={{
                    label:"Programowanie",
                    uri:"#"
                   }}
                   image={{
                        alt:"",
                        src:card_img.src,
                        title:""
                   }}
                   release="21 kwietnia 2021"
                   title="Co musisz wiedzieć o dokumentacjach React?"
                   uri="#"
                />
                <Card
                   category={{
                    label:"Programowanie",
                    uri:"#"
                   }}
                   image={{
                        alt:"",
                        src:card_img.src,
                        title:""
                   }}
                   release="21 kwietnia 2021"
                   title="Co musisz wiedzieć o dokumentacjach React?"
                   uri="#"
                />
                <Card
                   category={{
                    label:"Programowanie",
                    uri:"#"
                   }}
                   image={{
                        alt:"",
                        src:card_img.src,
                        title:""
                   }}
                   release="21 kwietnia 2021"
                   title="Co musisz wiedzieć o dokumentacjach React?"
                   uri="#"
                />
            </ul>
        </div>
    )
}