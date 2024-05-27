import avatar from '../assets/avatar.png'

export function Hero() {
    return(
        <div className="flex flex-col-reverse h-screen sm:h-[calc(100%-3rem)] items-center select-none w-full m-auto sm:flex-row">

            <a className='absolute bottom-10 sm:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#66fcf1" className="w-9 h-9">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                </svg>
            </a>

            <div className="flex flex-col justify-start items-center w-full h-full sm:justify-center sm:items-end">
                <h1 className="text-primary text-right text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl">Mateusz Laskowski</h1>
                <span className='flex gap-x-2'>
                    <p className='text-white text-center text-lg xl:text-4xl 2xl:text-6xl'>Frontend Developer</p>
                    <div className="relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                            <path stroke='#66fcf1' fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                        <div className="absolute top-full right-full mb-2 w-max p-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            FullStack Developer?
                        </div>
                    </div>
                </span>
            </div>

            <div className='flex h-full w-full p-4'>
                <div className="flex justify-center items-end w-full sm:justify-start sm:items-center"><img src={avatar} draggable='false' className='w-44 h-44 rounded-full shadow-primary shadow-lg hover:shadow-primary hover:shadow-xl sm:w-72 sm:h-72 xl:w-96 xl:h-96 2xl:w-160 2xl:h-160'/></div>
            </div>
            
        </div>
    )
}