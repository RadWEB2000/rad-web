import { Form, Hero } from "v-contact/index"
import css from "css/views/ContactPage.module.scss"
import {SecondaryPersonCard as Card} from "cards/index"
import radek_img from "img/radek-adamczyk.webp";
export default function ContactPage(){
    return(
        <>
            <Hero
                slogan="Twoi najlepsi specjaliści"
                title="Kontakt"
            />
            <span/>
            <div
                className={css.top}
            >
                <Form
                    button="Wyślij"
                    fields={[
                        {
                            id:"fullname",
                            label:"Imię i nazwisko",
                            name:"fullname",
                            placeholder:"Wpisz tutaj",
                            isRequired:true,
                            max:30,
                            min:3,
                            type:"text"
                        },
                        {
                            id:"company",
                            label:"Nazwa firmy",
                            name:"company",
                            placeholder:"Wpisz tutaj",
                            isRequired:true,
                            max:30,
                            min:3,
                            type:"text"
                        },
                        {
                            id:"website",
                            label:"Adres strony internetowe",
                            name:"website",
                            placeholder:"Wpisz tutaj",
                            isRequired:true,
                            max:30,
                            min:3,
                            type:"url"
                        },
                        {
                            id:"subject",
                            label:"Temat",
                            name:"subject",
                            placeholder:"Wpisz tutaj",
                            isRequired:true,
                            max:30,
                            min:3,
                            type:"text"
                        },
                        {
                            id:"mail",
                            label:"Adres e-mail",
                            name:"mail",
                            placeholder:"Wpisz tutaj",
                            isRequired:true,
                            max:50,
                            min:3,
                            type:"mail"
                        },
                        {
                            id:"phone",
                            label:"Numer telefonu",
                            name:"phone",
                            placeholder:"Wpisz tutaj",
                            isRequired:true,
                            max:16,
                            min:3,
                            type:"tel"
                        },
                    ]}
                 
                    statute="Velit facere vel et recusandae minima est delectus autem repellat. Asperiores sequi magnam aut facilis quia dicta tenetur corporis rem. Quaerat culpa alias."
                    title="Formularz kontaktowy"
                />
                <ul
                    className={css.cards}
                >
                    <Card
                        fullname={{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        }}
                        image={{
                            alt:"",
                             src: radek_img.src,
                             title:""
                        }}
                        occupation="Specjalista SEO/SEM - Web dev"
                        uri="#"
                    />
                </ul>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis saepe, earum distinctio ut nihil sint cum dolore numquam, magnam suscipit voluptates eaque et optio delectus voluptate itaque id dolor?
                Quasi sunt autem deserunt deleniti nam labore nulla tempore soluta itaque tenetur repudiandae dolor unde eum esse, temporibus laudantium, iure illo maiores quos distinctio! Iure totam adipisci ipsum doloribus quas.
                Nihil quas ipsa voluptatum necessitatibus hic commodi voluptatem placeat veniam minima, unde doloremque atque illum eaque a reiciendis esse odio. Officiis ipsam incidunt vitae temporibus dolores architecto ex cupiditate fugit.
                Repellendus, voluptas quas. Mollitia reiciendis ut, earum officiis culpa nostrum eaque, ipsum consequuntur similique omnis dicta perferendis dolorum ea. Dignissimos ipsam sequi autem, soluta repellat deleniti ab maiores fugit minus!
                Quod fugiat quia temporibus dignissimos provident nisi. Dolorem voluptatum velit praesentium necessitatibus porro tempora assumenda perferendis ad. Magni aut amet eius placeat repudiandae quia possimus commodi, et sint porro architecto!
                Quam porro labore sunt nam eaque enim maiores consequuntur consectetur doloremque. Alias minima qui, laborum temporibus sapiente at tempora suscipit unde aliquam sit quaerat rerum soluta. Est repellat dicta culpa!
                Porro consequatur expedita similique obcaecati, distinctio, quisquam dolor maxime ex, molestias dolorum sed repudiandae nulla facilis placeat vero. Earum iusto aperiam autem sed doloremque hic quibusdam sapiente laboriosam aliquam nemo?
                Commodi at consequatur enim corrupti odit perferendis voluptatem tempora, eius sapiente autem nisi expedita? At sed, perferendis neque modi commodi fugit molestiae reiciendis sapiente consectetur nesciunt aspernatur consequatur saepe dignissimos?
                Quis, in nemo autem accusamus beatae et necessitatibus dolorum repudiandae tempore reprehenderit accusantium non nesciunt fugit veritatis, deleniti molestias asperiores. Eaque et deleniti dignissimos ullam nihil laudantium natus dolor earum.
                Laborum tempore qui nesciunt officia ipsa? Ut porro voluptatibus, repellendus est ipsam similique et sint, eaque dolorem beatae amet rerum nisi earum corporis fuga iusto veniam! Nemo reprehenderit aliquid cum.
                Provident quia expedita atque, illum quisquam laboriosam possimus consectetur similique illo cupiditate consequuntur, culpa cum? Molestiae numquam, labore sed debitis quam voluptatem aspernatur, enim corporis voluptatibus modi nemo eaque asperiores?
                Officiis, corrupti temporibus nulla itaque hic incidunt ut quo, quae soluta voluptatibus nesciunt placeat pariatur adipisci! Iste in, labore reprehenderit aperiam modi, iure beatae consequatur blanditiis minima vero impedit reiciendis.
            </div>
        </>
    )
}