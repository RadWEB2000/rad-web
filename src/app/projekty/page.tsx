import { CardCollection, Hero, Statistics } from "v-projects/index"
import project_one from "img/project-one.jpg"

export default function Page(){
    return(
        <>
            <Hero
                content="Dolor neque enim impedit ut sed. Perferendis natus sed non. Vel eius quidem non sapiente voluptas voluptas ab ad. Voluptates qui adipisci quo provident ut. Natus dolorem non. Aut ad fuga qui perferendis sit officia dolorem quisquam. Error eos architecto minus. Quia placeat facere natus unde neque."
                slogan="Nasze najlepsze realizacje"
                title="Projekty"
            />
            <main>
                <Statistics
                    cards={[
                        {
                            content:12,
                            title:"Stron internetowych"
                        },
                        {
                            content:52,
                            title:"Kampanii SEO"
                        },
                        {
                            content:14,
                            title:"Kampanii PPC"
                        }
                    ]}
                    content="Dolor neque enim impedit ut sed. Perferendis natus sed non. Vel eius quidem non sapiente voluptas voluptas ab ad. Voluptates qui adipisci quo provident ut. Natus dolorem non. Aut ad fuga qui perferendis sit officia dolorem quisquam. Error eos architecto minus. Quia placeat facere natus unde neque."
                    title="Nasze statystki"
                />
                <CardCollection
                    cards={[
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                    ]}           
                    content="Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero"     
                    title="Strony internetowe"
                />
                <CardCollection
                    cards={[
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                        {
                            category:"Mtoryzacja",
                            image:{
                                alt:"",
                                src:project_one.src,
                                title:""
                            },
                            slogan:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel",
                            title:"Mechanik Ludomy",
                            uri:"#"
                        },
                    ]}           
                    content="Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero"     
                    title="Strony internetowe"
                />
            </main>
        </>
    )
}