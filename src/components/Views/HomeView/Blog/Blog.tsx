import {PrimaryButton as Button} from "buttons/index";
import {PrimaryBlogCard as Card} from "cards/index";
import {tBlog} from "v-home/Blog/Blog.models";
import css from "v-home/Blog/Blog.module.scss";
import img from "img/project-two.jpg";

export default function Blog({button,content,title}:tBlog){
    return(
        <div className={css.wrapper} >
            <section className={css.box} >
                <h2 className={css.title} >{title}</h2>
                <p
                     className={css.content} 
                    dangerouslySetInnerHTML={{__html:content}}
                />
                <Button
                    {...button}
                />
            </section>
            <ul className={css.cards} >
                <Card
                    author="Radosław Adamczyk"
                    button={{
                        label:"Więcej",
                        uri:"#"
                    }}
                    excerpt={`Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti.`}
                    image={{
                        alt:"",
                        src:img.src,
                        title:""
                    }}
                    release="21 kwietnia 2021"
                    title="Co znajdziesz nowego w Zorin OS 17?"
                />
                <Card
                    author="Radosław Adamczyk"
                    button={{
                        label:"Więcej",
                        uri:"#"
                    }}
                    excerpt={`Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti.`}
                    image={{
                        alt:"",
                        src:img.src,
                        title:""
                    }}
                    release="21 kwietnia 2021"
                    title="Co znajdziesz nowego w Zorin OS 17?"
                />
                <Card
                    author="Radosław Adamczyk"
                    button={{
                        label:"Więcej",
                        uri:"#"
                    }}
                    excerpt={`Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti.`}
                    image={{
                        alt:"",
                        src:img.src,
                        title:""
                    }}
                    release="21 kwietnia 2021"
                    title="Co znajdziesz nowego w Zorin OS 17?"
                />
                <Card
                    author="Radosław Adamczyk"
                    button={{
                        label:"Więcej",
                        uri:"#"
                    }}
                    excerpt={`Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti.`}
                    image={{
                        alt:"",
                        src:img.src,
                        title:""
                    }}
                    release="21 kwietnia 2021"
                    title="Co znajdziesz nowego w Zorin OS 17?"
                />
            </ul>
        </div>
    )
}