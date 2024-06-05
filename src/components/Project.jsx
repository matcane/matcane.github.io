// export function Project(props) {
//     const { id, data, img } = props;
//     return(
//         <div id={id} className='flex flex-col items-center justify-center text-primary h-full w-full p-2 md:h-6/6 lg:h-full xl:h-full shrink-0 select-none'>
//             <img draggable="false" className='h-1/6 sm:h-2/6 md:h-3/6 xl:h-4/6' src={img} />
//             <h1 className='flex justify-center items-center gap-x-4 w-5/6 py-4 text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>{data.title}
//                 <a draggable='false' href={data.repo} target="_blank">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:w-9 lg:h-9">
//                         <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
//                     </svg>
//                 </a>
//                 {data.demo && <a draggable='false' href={data.demo} target="_blank" className="border-2 border-secondary rounded-xl px-4">Demo</a>}
//             </h1>
//             <div className="flex flex-row flex-wrap w-full justify-center text-center text-default gap-2 px-2">
//                 {data.stack.map((tech, index) => (
//                     <p className="text-sm bg-secondary p-2 rounded-xl md:text-xl lg:text-xl xl:text-xl" key={index}>{tech}</p>
//                 ))}
//             </div>
//             <p className='w-full text-lg lg:text-xl md:text-xl xl:text-2xl xl:w-1/2 text-center text-white'>{data.description}</p>
//         </div>
//     )
// }

export function Project(props) {
    const { data, img } = props;
    return (
        <div className='flex flex-col items-center justify-center text-primary h-full w-full p-4 md:h-6/6 lg:h-full xl:h-full shrink-0 select-none'>
            <div className='w-full relative' style={{ maxWidth: '100%', maxHeight: '65.25vh' }}>
                <img draggable="false" className='w-full h-full object-contain' src={img} alt={data.title} />
            </div>
            <h1 className='flex flex-row justify-center items-center gap-2 w-full py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>
                {data.title}
                <a draggable='false' href={data.repo} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9">
                        <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                </a>
                {data.demo && (
                    <a draggable='false' href={data.demo} target="_blank" rel="noopener noreferrer" className="border-2 border-secondary rounded-xl px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
                        Demo
                    </a>
                )}
            </h1>
            <div className="flex flex-wrap w-full justify-center text-center text-default gap-2 px-2">
                {data.stack.map((tech, index) => (
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-secondary p-2 rounded-xl" key={index}>{tech}</p>
                ))}
            </div>
            <p className='w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl xl:w-2/3 text-center text-white mt-4'>
                {data.description}
            </p>
        </div>
    );
}


