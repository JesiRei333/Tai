
import Card from "./components/Card"
import Boton from "./components/Button"
import { features } from "./constants/features"



export default function App() {
  return(
    <body className="sm:bg-[rgb(27_27_31)] bg">
      
    
    <main className="bg-[rgb(27_27_31)] h-screen text-neutral-100 px-10">
      <header className="flex flex-col-reverse lg:grid grid-cols-[60%_40%] max-w-screen-xl mx-auto w-full">
        <div className="pt-10 flex flex-col gap-4">
          <h1 className="text-[32px] lg:text-[52px] leading-10 lg:leading-[60px] font-bold  text-center lg:text-left">
            <span className="bg-gradient-to-br from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Vite
            </span> 
            <br/> 
            Next Generation 
            <br/>
            Frontend Tooling
          </h1>
          <p className="text-2xl inter text-neutral-50/50 text-[24px] text-center lg:text-left">
            Get ready for a development environment that 
            <br/> 
            can finally catch up with you.</p>

          <div className="flex justify-center flex-wrap m-[-6] pt-[24px] m:justify-start">

          <Boton textoBoton= "Gett Start" className= "border-[rgb(116_123_255)] text-[rgb(255_255_255)] bg-[rgb(100_108_255)] hover:bg-[rgb(116_123_255)]" />
          <Boton textoBoton= "Why Vite" className=" bg-[rgb(50_54_63)] hover:bg-[rgb(65_72_83)]"/>
          <Boton textoBoton= "View on GitHub" className=" bg-[rgb(50_54_63)] hover:bg-[rgb(65_72_83)]"/>
          <Boton textoBoton= "🎉ViteConf 23!" className= "border-[rgb(116_123_255)] text-[rgb(255_255_255)] bg-[rgb(100_108_255)] hover:bg-[rgb(116_123_255)]" /> 
          </div>
       
        </div>

        <div className=" flex justify-center items-center">
          <img 
            src="https://vitejs.dev/logo-with-shadow.png"
            alt="vite logo"
            className=" size-48 sm:size-64 lg:size-80 xl:size-[320px]"


          />
        </div>

       

      </header>

<section className="flex flex-col-reverse sm:grid grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-xl mx-auto w-full pt-[64px]">
        
        {
          features.map((feature,index) =>{
            return (
              <Card
              key={ `feature-${index}`}
              emoji= {feature.emoji}
              feature= {feature.feature}
              description= {feature.description}
              isNew={feature.isNew}
              isHot={feature.isHot}
              
              />
            )

          })}
        
        
       
        
      </section>
    </main>
    </body>
  )
}
