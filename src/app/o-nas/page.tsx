import { Hero, Methods, Mission, Team } from "v-about/index";
import bg_img from "img/project-one.jpg";
import pc_img from "img/computer-icon.png"
import radek_adamczyk_img from "img/radek-adamczyk.webp";
import filip_bukowiecki_img from "img/filip-bukowiecki.webp";
export default function AboutUsPage(){
    return(
        <>
            <Hero
                image={{
                    alt:"",
                    src:bg_img.src,
                    title:""
                }}  
                title={`Kim jesteśmy?<br/>Poznaj nas!`}
            />
            <main>
                <Mission
                    cards={[
                        {
                            content:"Autem quis provident consequatur praesentium quaerat laborum voluptates accusantium dolorem. Aut at et nam. Et autem repellendus repudiandae ut maxime.",
                            title:"Uczciwość"
                        },
                        {
                            content:"Autem quis provident consequatur praesentium quaerat laborum voluptates accusantium dolorem. Aut at et nam. Et autem repellendus repudiandae ut maxime.",
                            title:"Bezpieczeństwo"
                        },
                        {
                            content:"Autem quis provident consequatur praesentium quaerat laborum voluptates accusantium dolorem. Aut at et nam. Et autem repellendus repudiandae ut maxime.",
                            title:"Kreatywność"
                        },
                    ]}
                    title="Nasza misja"
                />
                <Methods
                    cards={[
                        {
                            content:"Wspieramy przedsiębiorców w prowadzeniu biznesu z wykorzystaniem najlepszych praktyk marketingu internetowego. Kompas naszych ",
                            image:{
                                alt:"",
                                src:pc_img.src,
                                title:""
                            },
                            title:"Dobra strona"
                        },
                        {
                            content:"Wspieramy przedsiębiorców w prowadzeniu biznesu z wykorzystaniem najlepszych praktyk marketingu internetowego. Kompas naszych ",
                            image:{
                                alt:"",
                                src:pc_img.src,
                                title:""
                            },
                            title:"Dobra strona"
                        },
                        {
                            content:"Wspieramy przedsiębiorców w prowadzeniu biznesu z wykorzystaniem najlepszych praktyk marketingu internetowego. Kompas naszych ",
                            image:{
                                alt:"",
                                src:pc_img.src,
                                title:""
                            },
                            title:"Dobra strona"
                        },
                        {
                            content:"Wspieramy przedsiębiorców w prowadzeniu biznesu z wykorzystaniem najlepszych praktyk marketingu internetowego. Kompas naszych ",
                            image:{
                                alt:"",
                                src:pc_img.src,
                                title:""
                            },
                            title:"Dobra strona"
                        },
                    ]}
                    title="Sprawdzone metody<br/>marketingu online "
                />
                <Team
                     cards={[
                        {
                        category:"web",
                        fullname:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        image:{
                            alt:"Radosław Adamczyk - Specjalista SEO/SEM - Web developer - Front-end developer"               ,
                            src:radek_adamczyk_img.src,
                            title:""
                        },
                        occupation:"Spec. SEO/SEM - Web dev - Front-end dev",
                        uri:"#"
                        },
                        {
                        category:"video",
                        fullname:{
                            firstname:"Filip",
                            lastname:"Bukowiecki"
                        },
                        image:{
                            alt:"Radosław Adamczyk - Specjalista SEO/SEM - Web developer - Front-end developer"               ,
                            src:filip_bukowiecki_img.src,
                            title:""
                        },
                        occupation:"Videomaker - Montażysta",
                        uri:"#"
                        },
                    ]}
                    content="Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti."
                    title="Twój zespół"
                />
            </main>
        </>
    )
}