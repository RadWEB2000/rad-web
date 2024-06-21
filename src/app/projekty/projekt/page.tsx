import { Details, Hero, Specialists } from "v-project/index"
import img_one from "img/project-two.jpg";
import radek_img from "img/radek-adamczyk.webp";
import css from "css/views/ProjectPage.module.scss"

export default function ProjectPage(){
    return(
        <>
            <Hero
                category="Motoryzacja"
                content={`Wyobraź sobie swoje ulubione marki i produkty. Kiedy o nich myślisz, w Twojej wyobraźni pojawiają się konkretne obrazy, kształty, kolory lub symbole. To właśnie one świadczą o tym, że jesteśmy w stanie wyróżnić je pośród innych, podobnych artykułów czy usług oferowanych przez mnóstwo firm. To, co sprawia, że masz konkretne skojarzenia, to właśnie skuteczna identyfikacja wizualna.`}
                image={{
                    alt:"",
                    src:img_one.src,
                    title:""
                }}
                title="Mechanik Ludomy"
            />
            <Details/>
            <div
                className={css.wrapper}
            >
                <main
                    className={css.main}
                >
                    <div
                        style={{
                            maxWidth:"75ch",
                            margin:"2rem auto",
                            fontSize:"1.8rem",
                            lineHeight:2.7,
                            textWrap:"balance"
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum tenetur, magnam quidem delectus suscipit molestias possimus adipisci praesentium dolore ratione velit incidunt non enim, ut unde eum cupiditate quaerat.
                        Eos architecto explicabo veritatis provident libero impedit optio velit odio adipisci doloremque sed quo accusantium quisquam porro, ab rem corporis blanditiis modi dolore, est odit nesciunt voluptas pariatur repudiandae. Quasi?
                        Odio perspiciatis exercitationem ipsa aspernatur molestiae deserunt dolorem, ipsam consequatur, dolore ea cumque cum eveniet laboriosam eligendi nemo quam placeat veniam sunt ex. Doloribus, ex! Similique iste maxime ipsum ipsam!
                        Nobis, laboriosam a sunt esse, mollitia, expedita voluptatibus pariatur saepe cum tenetur eius fugiat deserunt blanditiis corrupti nostrum? Optio et atque excepturi animi, recusandae possimus suscipit incidunt itaque vero iusto!
                        Alias necessitatibus corporis dolores id saepe quas, vero nemo incidunt blanditiis sunt, quod vitae fugiat modi eum deserunt distinctio nostrum aliquam. Pariatur labore adipisci, sequi delectus excepturi tempora. Ratione, ab.
                    </div>
                </main>
                <aside
                    className={css.aside}
                >
                    <Specialists
                        cards={[
                            {
                                fullname:{
                                    firstname:"Radosław",
                                    lastname:"Adamczyk"
                                },
                                image:{
                                    alt:"",
                                    src:radek_img.src,
                                    title:""
                                },
                                occupation:"Specjalista SEO/SEM - Web developer",
                                uri:"#"
                            },
                            {
                                fullname:{
                                    firstname:"Radosław",
                                    lastname:"Adamczyk"
                                },
                                image:{
                                    alt:"",
                                    src:radek_img.src,
                                    title:""
                                },
                                occupation:"Specjalista SEO/SEM - Web developer",
                                uri:"#"
                            },
                        ]}
                        title="Nasi specjaliści"
                    />
                </aside>
            </div>
        </>
    )
}