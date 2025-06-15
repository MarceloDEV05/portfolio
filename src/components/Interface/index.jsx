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
   
        <main className="lg:flex justify-around items-center mt-20 w-full h-full px-5 lg:px-5 py-10 lg:py-0">
            <div className="flex lg:flex-col gap-5">

                <SiLinkedin size={50} color="#0077B5" className="hover:scale-105 duration-300 transition-all ease-in-out"/>

                <SiWhatsapp size={50} color="#00ff00" className="hover:scale-105 duration-300 transition-all ease-in-out"/>

                <SiGithub size={50} color="#808080" className="hover:scale-105 duration-300 transition-all ease-in-out"/>
            </div>
        <section className="mt-10">
        <h1 className="text-white text-3xl">Desenvolvedor Web</h1>
            <p className="text-white text-xl lg:w-100">Desenvolvedor web focado na construção de sites, landing pages e sistemas web.</p>

        <section className='flex w-full h-full justify-center'>
    
            <article className='lg:flex gap-5 mt-10 grid grid-cols-3 lg:grid-cols-6'>
             <SiReact size={50} color='#61dafb' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

             <SiTailwindcss size={50} color='#2563eb ' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

              <SiTypescript size={50} color='#007ACC' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

             <SiRedux size={50} color='#764ABC' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

             <SiFirebase size={50} color='#F6820D' className="hover:scale-105 duration-300 transition-all ease-in-out"/>

             <SiGit size={50} color='#f14e32' className="hover:scale-105 duration-300 transition-all ease-in-out"/>
            
            </article>
            </section>
        </section>
            <section>
            <ProjectsComponent/>
            </section>
        </main>
      
    )
}