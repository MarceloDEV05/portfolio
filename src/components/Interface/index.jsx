import { ProjectsComponent } from "../ProjectComponent"


import { 
    SiReact,
    SiTailwindcss, 
    SiTypescript, 
    SiRedux,
    SiFirebase,
    SiGit,
    SiGithub,
    SiWhatsapp,
    SiLinkedin,
   
} from 'react-icons/si'


export const Interface = () => {
    return(
   
        <main className="lg:flex justify-around items-center mt-20 w-full h-full px-5 lg:px-15 py-10 lg:py-0">
            <div className="flex lg:flex-col gap-5">

                <SiLinkedin size={50} color="#fff" className="hover:scale-105 duration-300 transition-all ease-in-out"/>

                <SiWhatsapp size={50} color="#fff" className="hover:scale-105 duration-300 transition-all ease-in-out"/>

                <SiGithub size={50} color="#fff" className="hover:scale-105 duration-300 transition-all ease-in-out"/>
            </div>
        <section className="mt-10">
        <h1 className="text-white text-3xl">Desenvolvedor Web</h1>
            <p className="text-white text-xl lg:w-100">Desenvolvedor web focado na construção de sites, landing pages e sistemas web.</p>

        <section className='flex w-full h-full justify-center'>
    
            <article className='lg:flex gap-3 mt-10 grid grid-cols-3'>
             <SiReact size={50} color='#fff' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

             <SiTailwindcss size={50} color='#fff' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

              <SiTypescript size={50} color='#fff' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

             <SiRedux size={50} color='#fff' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

             <SiFirebase size={50} color='#fff' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

             <SiGit size={50} color='#fff' className="hover:scale-105 duration-300 transition-all ease-in-out"/>
            
            </article>
            </section>
        </section>
            <section>
            <ProjectsComponent/>
            </section>
        </main>
      
    )
}