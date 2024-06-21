import { tForm } from "v-contact/Form/Form.models";
import css from "v-contact/Form/Form.module.scss"

export default function Form({fields,title, button,statute}:tForm){
    return(
        <div
            className={css.wrapper}
        >
            <h2
                className={css.title}
                dangerouslySetInnerHTML={{__html:title}}
            />
            <form
                acceptCharset="utf-8"
                autoComplete="off"
                className={css.form}
            >
                <div
                    className={css.fields}
                >
                    {
                        fields.map(({label,id,name,placeholder,isRequired,max,min, type}) => {
                            return(
                                <div
                                    className={css.field}
                                    key={label}
                                >
                                     <label 
                                        className={css.field__label}
                                        dangerouslySetInnerHTML={{__html:`${label} :`}}
                                        htmlFor={name}
                                    />
                                    <input 
                                        autoComplete="off"
                                        className={css.field__input}
                                        id={id}
                                        maxLength={max}
                                        minLength={min}
                                        name={name}
                                        required={isRequired}
                                        placeholder={placeholder}
                                        type={type}
                                    />
                                   
                                </div>
                            )
                        })
                    }
                </div>
                <p
                    className={css.statute}
                    dangerouslySetInnerHTML={{__html:statute}}
                />
                <button
                    className={css.button}
                    type="submit"
                >
                    {button}
                </button>
            </form>
        </div>
    )
}