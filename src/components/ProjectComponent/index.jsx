import projects from "../../projects"

export const ProjectsComponent = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-160 h-full mt-10">
            {projects.map((projeto) => (
                <section key={projeto.id}>
                    <article className="border flex items-center justify-center flex-col border-white rounded-md p-4">
                        <img 
                        src={projeto.projectImage} 
                        alt={projeto.projectName}
                        className="h-30 object-cover w-70 rounded-md"
                        />
                        <h1 className="text-white text-xl text-center">{projeto.projectName}</h1>
                        <p className="text-white line-clamp-2 max-w-70 text-center">{projeto.description}</p>

                        <button className="bg-white flex items-center w-full justify-center rounded-md font-medium text-lg">
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