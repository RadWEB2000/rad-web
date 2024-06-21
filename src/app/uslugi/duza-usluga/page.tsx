import { Blog, Categories, Hero, Industries, Projects, SubServices } from "v-m-service/index"
import i_dev from "img/development.webp"
import i_design from "img/web_design.webp"
import i_help from "img/consulting.webp"
import i_servers from "img/servers.webp"
import man_img from "img/man-with-phone-holiday.webp";
import project_img from "img/project-three.jpg"
import card_img from "img/card.jpg"
import card_1 from "img/card_1.jpg"
import card_2 from "img/card_2.jpg"
import card_3 from "img/card_3.jpg"
export default function Page(){
    return(
        <>
            <Hero
                content="Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero"
                slogan="Twoja identyfikacja"
                title="Strony internetowe"
            />
            <main>
                <SubServices
                    cards={[
                        {
                            icon: {
                                alt:"",
                                src:i_dev.src,
                                title:""
                            },
                            title:"Programowanie"
                        },
                        {
                            icon: {
                                alt:"",
                                src:i_design.src,
                                title:""
                            },
                            title:"Projektowanie strony"
                        },
                        {
                            icon: {
                                alt:"",
                                src:i_help.src,
                                title:""
                            },
                            title:"Konsultacje"
                        },
                        {
                            icon: {
                                alt:"",
                                src:i_servers.src,
                                title:""
                            },
                            title:"Wdrożenie na serwer"
                        },
                    ]}
                    content="Zaprojektujemy dla Ciebie skuteczną stronę www, którą klienci świadomiei nieświadomie będą odbierać w sposób profesjonalny oraz pozytywny.W ramach zamówienia otrzymasz:"
                    title="Co u nas znajdziesz?"
                />
                <Categories
                    cards={[
                        {
                            content:"Zaprojektujemy dla Ciebie skuteczną stronę www, którą klienci świadomie",
                            title:"Blog",
                            uri:"#"
                        },
                        {
                            content:"Zaprojektujemy dla Ciebie skuteczną stronę www, którą klienci świadomie",
                            title:"Blog",
                            uri:"#"
                        },
                        {
                            content:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin eu urna augue. Nam nibh leo, tempus eget gravida vel, blandit vitae felis. Ut porttitor elit diam, eget malesuada leo congue sed. ",
                            title:"Blog",
                            uri:"#"
                        },
                        {
                            content:"Zaprojektujemy dla Ciebie skuteczną stronę www, którą klienci świadomie",
                            title:"Blog",
                            uri:"#"
                        },
                        {
                            content:"Zaprojektujemy dla Ciebie skuteczną stronę www, którą klienci świadomie",
                            title:"Blog",
                            uri:"#"
                        },
                    ]}
                    content="Zaprojektujemy dla Ciebie skuteczną stronę www, którą klienci świadomiei nieświadomie będą odbierać w sposób profesjonalny oraz pozytywny.W ramach zamówienia otrzymasz: Zaprojektujemy dla Ciebie skuteczną stronę www, którą klienci świadomiei nieświadomie będą odbierać w sposób profesjonalny oraz pozytywny.W ramach zamówienia otrzymasz:"
                    title="Jakie znajdziesz rodzaje stron u nas?"
                />
                <Industries
                    cards={[
                        {
                            label:"Rolnictwo",
                            uri:""
                        },
                        {
                            label:"Beauty",
                            uri:""
                        },
                        {
                            label:"Motoryzacja",
                            uri:""
                        },
                        {
                            label:"Administracja",
                            uri:""
                        },
                        {
                            label:"Farmaceutyka",
                            uri:""
                        },
                        {
                            label:"Religia",
                            uri:""
                        },
                        {
                            label:"Prawo",
                            uri:""
                        },
                        {
                            label:"Gastronomia",
                            uri:""
                        },
                        {
                            label:"Ogród",
                            uri:""
                        },
                        {
                            label:"Fotografia",
                            uri:""
                        },
                        {
                            label:"E-commerce",
                            uri:""
                        },
                     
                    ]}
                    image={{
                        alt:"",
                        src:man_img.src,
                        title:""
                    }}
                    title="Strony internetowe dla branż"
                />
                <Projects
                    title="Nasze realizacje stron internetowych"
                    content={`Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero`}
                    cards={[
                        {
                            category:"Motoryzacja",
                            image:{
                                alt:"",
                                src:card_1.src,
                                title:""
                            },
                            slogan:"ut deleniti enim odit molestias ut Repellendus autem consequatur consequatur. Et enim dolores delectus debitis vitae.",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Motoryzacja",
                            image:{
                                alt:"",
                                src:card_img.src,
                                title:""
                            },
                            slogan:"ut deleniti enim odit molestias ut Repellendus autem consequatur consequatur. Et enim dolores delectus debitis vitae.",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Motoryzacja",
                            image:{
                                alt:"",
                                src:card_2.src,
                                title:""
                            },
                            slogan:"ut deleniti enim odit molestias ut Repellendus autem consequatur consequatur. Et enim dolores delectus debitis vitae.",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Motoryzacja",
                            image:{
                                alt:"",
                                src:card_3.src,
                                title:""
                            },
                            slogan:"ut deleniti enim odit molestias ut Repellendus autem consequatur consequatur. Et enim dolores delectus debitis vitae.",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                    ]}
                />
                <div
                style={{
                    margin:"3.6vh auto",
                    width:"clamp(5rem, 110rem, 95vw)",
                    lineHeight:2.5
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate aliquid deleniti sed explicabo odit eum iure autem. Nisi modi ut obcaecati ipsum eligendi placeat quasi vero expedita in maiores.
                Voluptatem, voluptatum explicabo repudiandae ex sed voluptatibus illo alias rem sunt labore ea praesentium dignissimos laboriosam adipisci omnis distinctio vel facilis quibusdam optio quae fuga! Sunt tempora quisquam explicabo vel?
                Deleniti, molestiae? Rerum eaque corrupti laborum doloremque excepturi, autem velit iste ducimus ad explicabo repellat amet neque fugit numquam omnis magnam minus harum dicta optio alias eos labore, saepe assumenda?
                Animi nam commodi voluptatibus consequuntur consectetur neque saepe natus quia ex ad mollitia, distinctio officia. Eius laboriosam quas veritatis similique officiis ab expedita optio tempore ea. Odio voluptas nemo et!
                Neque autem error eaque est! Modi, placeat recusandae. Ducimus dolores vero aliquam laudantium esse unde modi, quisquam accusantium eaque sint, adipisci qui nemo commodi sit optio corrupti molestias illo nam?
                Ducimus sit, magni similique quas fugit et deserunt tempore veniam voluptate labore aut cupiditate blanditiis corrupti, provident perspiciatis nisi odit aspernatur asperiores facilis culpa officiis eveniet. Molestias explicabo voluptatem labore.
                Quasi nisi doloribus molestias debitis aut, pariatur ipsum ex, consectetur quae obcaecati molestiae atque fuga nobis. Id iste, repudiandae in itaque ducimus error iusto at. Sunt praesentium quasi itaque distinctio.
                Numquam aliquid aperiam doloremque natus commodi consequatur iste dolore optio impedit, inventore culpa exercitationem magnam quidem molestias voluptatem nihil. Tempora eius voluptatum esse veniam, eveniet dicta deserunt necessitatibus qui corrupti!
                Quae illum, rerum optio dolorum magni enim animi vitae cumque quisquam molestiae quas alias quo non ut repellendus quam cum possimus maiores quidem suscipit amet quia perspiciatis. Quia, repudiandae commodi.
                Deleniti commodi nulla minima expedita iusto, quia mollitia eaque dolores in esse, sed asperiores autem cum assumenda. Et odio, perferendis nam numquam quasi illo veniam, provident nobis doloremque nihil quisquam.
                Asperiores quas, dolorum non laudantium nam, culpa iste inventore enim possimus quisquam magnam saepe. Labore dicta id ducimus illo repudiandae et dignissimos praesentium voluptates impedit nobis, rerum aperiam iste iure?
                At provident expedita corporis recusandae accusamus dolore laborum sed, tenetur reprehenderit! Adipisci quasi unde neque ratione placeat officia illum reiciendis dolor suscipit! Beatae est laudantium, dicta vel expedita esse suscipit.
                Impedit, incidunt. Molestiae ex, quaerat, illum architecto consequatur veritatis incidunt modi deserunt quod tempora nam eaque officia eligendi voluptas error cupiditate alias quia impedit aut maxime exercitationem. Ipsam, ex sint.
            </div>
                <Blog/>
            </main>
            
        </>
    )
}