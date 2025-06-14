import projects from "../../projects"

export const ProjectsComponent = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full h-full mt-10">
            {projects.map((projeto) => (
                <section key={projeto.id} className="hover:scale-110 duration-300 transition-all ease-in-out">
                    <article className="border w-full flex items-center justify-center flex-col border-white rounded-xl px-2 py-2">
                         <h1 className="text-white text-xl text-center pt-5 mb-5">{projeto.projectName}</h1>
                        <img 
                        src={projeto.projectImage} 
                        alt={projeto.projectName}
                        className="lg:h-30 h-30 w-70 object-cover lg:w-70  px-2 rounded-lg"
                        />
                       
                        <p className="text-white md:line-clamp-2 lg:line-clamp-2 lg:max-w-70 text-center pt-5">{projeto.description}</p>

                        <button className="bg-white flex items-center w-full justify-center rounded-md font-medium text-lg mt-10">
                                <a target="_blank" href={projeto.link}>
                                acessar
                            </a>
                        </button>
                    </article>
                </section>
            ))}
        </div>
    )
}