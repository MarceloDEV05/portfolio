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
   
        <main className="flex justify-around items-center w-full h-screen gap-15 px-15">
            <div className="flex flex-col gap-5">

                <SiLinkedin size={50} color="#fff" className="hover:scale-105 duration-300 transition-all ease-in-out"/>

                <SiWhatsapp size={50} color="#fff" className="hover:scale-105 duration-300 transition-all ease-in-out"/>

                <SiGithub size={50} color="#fff" className="hover:scale-105 duration-300 transition-all ease-in-out"/>
            </div>
        <section>
        <h1 className="text-white text-3xl">Desenvolvedor Web</h1>
            <p className="text-white text-xl w-100">Desenvolvedor web focado na construção de sites, landing pages e sistemas web.</p>

        <section className='flex w-full h-full justify-center'>
    
            <article className='flex gap-3 mt-10'>
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