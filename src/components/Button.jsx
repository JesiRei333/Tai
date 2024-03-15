export default function Boton(props){
    return(

   
        
    <article className="inline-block text-center font-semibold whitespace-nowrap p-[6px] ">

        <button className={"rounded-[20px] p-[0_20px] leading-[38px] text-[14px]  text-[rgb(255_255_245/86%]" +  " " + props.className}> {props.textoBoton } </button>
       
      
        </article>
    )
}
