
// import PropTypes from 'prop-types'
import { useContext } from 'react'

import { MovieContext } from '../context/MovieProvider'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function MovieList({ title, data }) {
    const { handleTrailer } = useContext(MovieContext);
    return (
        <div className="text-white p-10 bg-black">
            <h2 className="uppercase text-3xl font-bold mb-4">{title}</h2>
            <Carousel responsive={responsive} className="flex items-center space-x-4">
                {data && data.length > 0 && data.map((item) => {
                    return (
                        <div key={item.id} className="w-[200px] h-[300px] relative group" onClick={() => handleTrailer(item.id)}>
                            <div className='group-hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full'>
                                <div className='absolute top-0 left-0 w-full h-full bg-black/40'></div>
                                <img src={`${import.meta.env.VITE_URL_IMG}${item.poster_path}`} alt="" className='w-full h-full object-cover' />
                                <div className='absolute bottom-4 left-2'>
                                    <p className='uppercase text-md'>{item.title || item.original_title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>

        </div>
    )
}

// MovieList.PropTypes = {
//     title: PropTypes.string,
//     data: PropTypes.array,
// }

export default MovieList
