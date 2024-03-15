import clsx from "clsx"

export default function Card(props) {
    return (
        <article 
        
        className={clsx("bg-[rgb(32_32_39)] p-6  space-y-4 rounded-[12px]" + " " + props.className,
        {  "border border-white/20" : props.isNew === true ,
         /* {  "border border-yellow-300" : props.isNew } */
         "bg-blue-600/10" : props.isNew === true
        }
        )}>
            <figure className="bg-neutral-50/5 p-3 w-fit rounded-lg text-lg">{props.emoji|| "♥"}</figure>
            <h2 className="font-semibold">{props.feature || "feature"}</h2>
            <p className="text-neutral-50/50">{props.description|| "text"}</p>

{/*condicional redering*/}

            {props.isNew == true && <p>Esto es nuevo</p>}
            {/*condicional redering*/}
            {props.isNew !== true && <p>Esto no es nuevo</p>}

{/*porp.isNew ? <p>Esto es nuevo</p>:<p>Esto no es nuevo</p> */}
        </article>

        

    )
}