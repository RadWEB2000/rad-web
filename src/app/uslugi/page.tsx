import { Hero, Industries, Reasons, ServicesBox } from "v-services/index"
import man_img from "img/man-with-phone-business.webp";
import tractor_icon from "img/tractor.svg";
import beauty_icon from "img/beauty.svg";
import mechanic_icon from "img/mechanic.svg";
import happy_man_img from "img/man-with-laptop.webp";

export default function Page(){
    return(
        <>
            <Hero
                content={`Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero`}
                image={{
                    alt:"",
                    src:man_img.src,
                    title:""
                }}
                slogan="Zdecyduj się na wyższy poziom"
                title="Usługi RadWEB"
            />
            <main
                style={{
                    margin:"4vh 0"
                }}
            >
               <ServicesBox
                    button={{
                        label:"Czytaj więcej",
                        uri:"#"
                    }}               
                    cardButton="więcej"
                    cards={[
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Blog",
                            uri:"#"
                        },
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Portfolio",
                            uri:"#"
                        },
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Wizytówki",
                            uri:"#"
                        },
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Aplikacje WEB",
                            uri:"#"
                        },
                    ]}
                    content="Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero. Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero"
                    title="Strony internetowe"
               />
               <ServicesBox
                    button={{
                        label:"Czytaj więcej",
                        uri:"#"
                    }}               
                    cardButton="więcej"
                    cards={[
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Blog",
                            uri:"#"
                        },
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Portfolio",
                            uri:"#"
                        },
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Wizytówki",
                            uri:"#"
                        },
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Aplikacje WEB",
                            uri:"#"
                        },
                    ]}
                    content="Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero. Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero"
                    title="Strony internetowe"
               />
               <ServicesBox
                    button={{
                        label:"Czytaj więcej",
                        uri:"#"
                    }}               
                    cardButton="więcej"
                    cards={[
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Blog",
                            uri:"#"
                        },
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Portfolio",
                            uri:"#"
                        },
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Wizytówki",
                            uri:"#"
                        },
                        {
                            content:"Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero",
                            title:"Aplikacje WEB",
                            uri:"#"
                        },
                    ]}
                    content="Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero. Donec sem urna, hendrerit et diam id, consectetur ornare ante. Integer id diam vel ipsum auctor accumsan. Mauris convallis, nulla venenatis posuere feugiat, arcu libero"
                    title="Strony internetowe"
               />
               <Industries
                    buttonCard="więcej"
                    cards={[
                        {
                            content:"Duis et erat tristique, interdum lorem sit amet, consequat sapien. Mauris eu tincidunt magna. Vestibulum ultrices dapibus vehicula. Nulla facilisi. Sed malesuada aliquet dapibus. Integer sit amet ligula u",
                            icon:{
                                alt:"",
                                src:tractor_icon,
                                title:""
                            },
                            title:"Rolnictwo",
                            uri:"#"
                        },
                        {
                            content:"Duis et erat tristique, interdum lorem sit amet, consequat sapien. Mauris eu tincidunt magna. Vestibulum ultrices dapibus vehicula. Nulla facilisi. Sed malesuada aliquet dapibus. Integer sit amet ligula u",
                            icon:{
                                alt:"",
                                src:mechanic_icon,
                                title:""
                            },
                            title:"Motoryzacja",
                            uri:"#"
                        },
                        {
                            content:"Duis et erat tristique, interdum lorem sit amet, consequat sapien. Mauris eu tincidunt magna. Vestibulum ultr",
                            icon:{
                                alt:"",
                                src:beauty_icon,
                                title:""
                            },
                            title:"Beauty",
                            uri:"#"
                        }
                    ]}
                    slogan="Sprawdź po branżach!"
                    title={`Nie wiesz co dla siebie wybrać?`}
               />
               <Reasons
                    cards={[
                        {
                            content:`Etiam quis lacus id ipsum pellentesque aliquet et non dolor. Integer lacinia consequat libero, sed pellentesque risus dictum vel.`,
                            title:"Lojalność"
                        },
                        {
                            content:`Etiam quis lacus id ipsum pellentesque aliquet et non dolor. Integer lacinia consequat libero, sed pellentesque risus dictum vel.`,
                            title:"Lojalność"
                        },
                        {
                            content:`Etiam quis lacus id ipsum pellentesque aliquet et non dolor. Integer lacinia consequat libero, sed pellentesque risus dictum vel.`,
                            title:"Lojalność"
                        },
                        {
                            content:`Etiam quis lacus id ipsum pellentesque aliquet et non dolor. Integer lacinia consequat libero, sed pellentesque risus dictum vel.`,
                            title:"Lojalność"
                        },
                        {
                            content:`Etiam quis lacus id ipsum pellentesque aliquet et non dolor. Integer lacinia consequat libero, sed pellentesque risus dictum vel.`,
                            title:"Lojalność"
                        }
                    ]}
                    image={{
                        alt:"",
                        src:happy_man_img.src,
                        title:""
                    }}
                    title="Dlaczego warto nas wybrać?"
               />
            </main>
        </>
    )
}