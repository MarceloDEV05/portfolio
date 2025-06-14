import {FaFile} from 'react-icons/fa6'

export const Header = () => {
    return(
        <header className="w-full fixed h-16 top-0 bg-black border-b border-gray-400 items-center flex justify-between px-6">
            <h1 className="text-white text-3xl font-medium">Marcelo Cardoso</h1>
            <div>
                <button className="bg-white p-1 rounded-md font-medium flex items-center justify-center gap-1">Baixar CV <FaFile/></button>
            </div>
        </header>
    )
}