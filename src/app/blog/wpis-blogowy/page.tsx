import { Author, Content, Hero, TableOfContents } from "v-post/index"
import city_img from "img/city.jpg";
import radek_img from "img/radek-adamczyk.webp";
import dynamic from 'next/dynamic';
import css from "css/views/PostPage.module.scss"

const Share = dynamic(
    () => import("v-post/index")
    .then(file => file.Share),
    {
        ssr:false
    }
)


export default function PostPage(){
    return(
        <>
            <Hero
                author="Radosław Adamczyk"           
                breadcrumbs={[
                    {
                        label:"Start",
                        uri:"#"
                    },
                    {
                        label:"Blog",
                        uri:"#"
                    },
                    {
                        label:"SEO",
                        uri:"#"
                    }
                ]}
                image={{
                    alt:"",
                    src:city_img.src,
                    title:""
                }}  
                readingTime={"13 minut"}
                release="21 kwietnia 2021"
                title="Ile kosztuje pozycjonowanie strony w Google? Pozycjonowanie stron cennik
"
            />
            <main className={css.main}>
                <TableOfContents
                    title="Spis treści:"
                    items={[
                        {
                            label:"Od czego zależy cena pozycjonowania?",
                            uri:"#"
                        },
                        {
                            label:"Branża, w której działasz",
                            uri:"#"
                        },
                        {
                            label:"Konkurencyjność Twojej branży",
                            uri:"#"
                        },
                        {
                            label:"Skala działalności",
                            uri:"#"
                        },
                        {
                            label:"Aktualny stan witryny",
                            uri:"#"
                        },
                        {
                            label:"Cennik pozycjonowania stron - co otrzymuję w ramach usługi?",
                            uri:"#"
                        },
                        {
                            label:"Analiza słów kluczowych",
                            uri:"#"
                        },
                        {
                            label:"Content marketing",
                            uri:"#"
                        },
                    ]}
                />
                <Content/>
                <Share
                    share={{
                        summary:"Kolorystyka – to kolejny element identyfikacji wizualnej, który pozwala wyróżnić się markom na tle konkurencji, wpływając na percepcję i emocje odbiorców.",
                        tags:["web", "seo"],
                        title:"Cennik pozycjonowania stron - co otrzymuję w ramach usługi?",
                        url:"#",
                        source:"website"
                    }}
                    title="Udostępnij"
                />
                <Author
                    fullname={{
                        firstname:"Radosław",
                        lastname:"Adamczyk"
                    }}
                    image={{
                        alt:"",
                        src:radek_img.src,
                        title:""
                    }}
                    occupation="Spec. SEO/SEM - Web dev - Front end dev"
                    uri="#"
                />
            </main>
        </>
    )
}