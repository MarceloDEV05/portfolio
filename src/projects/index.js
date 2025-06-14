import imagem1 from '../assets/projeto1.png'
import imagem2 from '../assets/projeto2.png'
import imagem3 from '../assets/projeto3.png'
import imagem4 from '../assets/projeto4.png'

const projects = [
    {
        id: 1,
        projectName: 'Erivelton AutoCenter',
        projectImage: imagem1,
        description: 'Landing Page Desenvolvida para uma Auto Center com React JS, TailwindCSS',
        link: 'http://erivelton-autocenter.vercel.app'
    },
    {
        id: 2,
        projectName: 'MoviePRO',
        projectImage: imagem2,
        description: 'Site de filmes e series desenvolvido com React JS, Typescript, TailwindCSS, Axios para consumo da api do TMDB',
        link: 'http://moviepro-update.vercel.app'
    },
    {
        id: 3,
        projectName: 'StoreREDUX',
        projectImage: imagem3,
        description: 'Site simula loja virtual de moda feminina, Desenvolvido com React JS, Typescript, TailwindCSS, Redux, React-router-dom',
        link: 'http://loja-redux.vercel.app'
    },
    {
        id: 4,
        projectName: 'login',
        projectImage: imagem4,
        description: 'Sistema de login desenvolvido com React JS, TailwindCSS, React-icons, React-toastfy e integração com banco de dados Firebase',
        link: 'http://login-nu-ruddy.vercel.app'
    }
]

export default projects