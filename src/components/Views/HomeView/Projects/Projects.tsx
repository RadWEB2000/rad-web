import {PrimaryButton as Button} from "buttons/index";
import {HomeProjectCard as Card} from "cards/index";
import {tProjects} from "v-home/Projects/Projects.models";
import css from "v-home/Projects/Projects.module.scss";
import img from "img/project-three.jpg";

export default function Projects({button,title}:tProjects){
    console.log(img.src)
    return(
        <div className={css.wrapper} >
            <section className={css.box} >
                <h2 
                    className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                /> 
                <Button
                    {...button}
                />
            </section>
            <ul>
                <Card
                    author={{
                        content:"Radosław Adamczyk",
                        label:"Autor"
                    }}
                    button={{
                            label:"Czytaj więcej",
                            uri:"#"
                    }}
                    description={{
                        content:`Praesent nisi libero, lacinia vitae volutpat a, euismod nec neque. Ut id lacus nec arcu suscipit efficitur. Vestibulum pulvinar fringilla metus eget malesuada. Cras tempus, velit nec tempus tristique, nunc justo dapibus leo, quis pharetra nulla erat sit amet justo. Aliquam a facilisis leo. <br/><br/> Nullam eros diam, efficitur sed est quis, varius faucibus mauris. Nam leo justo, vehicula et ipsum ac, suscipit mollis nulla. Curabitur hendrerit felis tempor condimentum molestie.`,
                        label:"Opis"
                    }}
                    image={{
                        alt:"",
                        src:img.src,
                        title:""
                    }}
                    release={{
                        content:"21 kwietnia 2024",
                        label:"Data"
                    }}
                    title="Agromar"
                />
                <Card
                    author={{
                        content:"Radosław Adamczyk",
                        label:"Autor"
                    }}
                    button={{
                            label:"Czytaj więcej",
                            uri:"#"
                    }}
                    description={{
                        content:`Praesent nisi libero, lacinia vitae volutpat a, euismod nec neque. Ut id lacus nec arcu suscipit efficitur. Vestibulum pulvinar fringilla metus eget malesuada. Cras tempus, velit nec tempus tristique, nunc justo dapibus leo, quis pharetra nulla erat sit amet justo. Aliquam a facilisis leo. <br/><br/> Nullam eros diam, efficitur sed est quis, varius faucibus mauris. Nam leo justo, vehicula et ipsum ac, suscipit mollis nulla. Curabitur hendrerit felis tempor condimentum molestie.`,
                        label:"Opis"
                    }}
                    image={{
                        alt:"",
                        src:img.src,
                        title:""
                    }}
                    release={{
                        content:"21 kwietnia 2024",
                        label:"Data"
                    }}
                    title="Agromar"
                />
                <Card
                    author={{
                        content:"Radosław Adamczyk",
                        label:"Autor"
                    }}
                    button={{
                            label:"Czytaj więcej",
                            uri:"#"
                    }}
                    description={{
                        content:`Praesent nisi libero, lacinia vitae volutpat a, euismod nec neque. Ut id lacus nec arcu suscipit efficitur. Vestibulum pulvinar fringilla metus eget malesuada. Cras tempus, velit nec tempus tristique, nunc justo dapibus leo, quis pharetra nulla erat sit amet justo. Aliquam a facilisis leo. <br/><br/> Nullam eros diam, efficitur sed est quis, varius faucibus mauris. Nam leo justo, vehicula et ipsum ac, suscipit mollis nulla. Curabitur hendrerit felis tempor condimentum molestie.`,
                        label:"Opis"
                    }}
                    image={{
                        alt:"",
                        src:img.src,
                        title:""
                    }}
                    release={{
                        content:"21 kwietnia 2024",
                        label:"Data"
                    }}
                    title="Agromar"
                />
            </ul>
        </div>
    )
}