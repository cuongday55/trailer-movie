import { MovieContext } from '../context/MovieProvider'

import { useContext } from 'react';

const MovieSearch = ({ title, data }) => {

    const { handleTrailer } = useContext(MovieContext)



    return (
        <div className="text-white p-10 bg-black">
            <h2 className="uppercase text-3xl font-bold mb-4">{title}</h2>
            <div className="flex items-center space-x-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl::grid-cols-8 gap-4">
                    {data && data.length > 0 && data.map((item) => {
                        return (
                            <div key={item.id} className="w-[200px] h-[300px] relative group" onClick={() => handleTrailer(item.id)}>
                                <div className='group-hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full'>
                                    <div className='absolute top-0 left-0 w-full h-full bg-black/40'></div>
                                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className='w-full h-full object-cover' />
                                    <div className='absolute bottom-4 left-2'>
                                        <p className='uppercase text-md'>{item.title || item.original_title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

        </div>
    )
}


export default MovieSearch
