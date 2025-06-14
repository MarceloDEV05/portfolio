import {FaFile} from 'react-icons/fa6'

export const Header = () => {
    return(
        <header className="w-full fixed h-16 top-0 bg-black border-b border-gray-400 items-center flex md:justify-between lg:justify-between justify-around gap-10 px-4">
            <h1 className="text-white lg:text-3xl text-center text-xl font-medium">Marcelo Cardoso</h1>
            <div>
                <button className="bg-white p-1 rounded-md font-medium flex items-center gap-1">Baixar CV <FaFile/></button>
            </div>
        </header>
    )
}