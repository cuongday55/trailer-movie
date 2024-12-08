import IconRating from '../assets/images/rating.png';
import IconRatingHaft from '../assets/images/rating-half.png';
import ImgTemp from '../assets/images/temp-1.jpeg';
import PlayBtn from '../assets/images/play-button.png';

const Banner = () => {
    return (
        <div className="px-4 w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"></div>
            <div className="flex justify-center items-center w-full h-full gap-x-32 relative z-10">
                <div className="w-[50%]">
                    <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-3 text-lg font-bold inline-block mb-4">TV Show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-3xl inline-block">Nghe nói em thích tôi</h2>
                        <div className="flex items-center space-x-3 flex-grow">
                            <img src={IconRating} alt="" className='w-8 h-8' />
                            <img src={IconRating} alt="" className='w-8 h-8' />
                            <img src={IconRating} alt="" className='w-8 h-8' />
                            <img src={IconRating} alt="" className='w-8 h-8' />
                            <img src={IconRatingHaft} alt="" className='w-8 h-8' />
                        </div>
                        <p className='text-white '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi temporibus voluptates est dolores ipsam consequatur mollitia, repellendus labore, tempore doloribus corporis itaque corrupti, eveniet ab voluptatibus ut. Deleniti, culpa tenetur.
                            Explicabo quae suscipit dolores voluptas expedita iusto voluptatem autem excepturi, animi modi commodi molestias, quasi accusantium quisquam, nemo quia tempore numquam? Odit dolore aliquam vitae doloremque assumenda obcaecati qui repellat.
                        </p>
                        <div className='flex items-center gap-6'>
                            <button className='p-3 text-white bg-black font-bold text-sm'>Chi tiết</button>
                            <button className='p-3 text-white bg-red-600 font-bold text-sm'>Xem phim</button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex justify-center">
                    <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                        <img src={ImgTemp} alt="" className='w-full h-full object-cover' />
                        <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                            <img src={PlayBtn} alt="" className='w-16 h-16 z-20' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner