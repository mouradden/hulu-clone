import Image from 'next/image'
import { TbThumbUp } from "react-icons/tb";

function Thumbnail({result})
{
    const Base_Url = "https://image.tmdb.org/t/p/original";
    return (
        <div className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image 
                src={`${Base_Url}${result.backdrop_path}`}
                width={1920}
                height={1080}
                alt={result.title}
                />
            <div className='p-2 '>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h1 className='mt-1 text-2xl text-white group-hover:font-bold transition-all duration-100 ease-in-out'>
                    {result.title || result.original_name}
                </h1>
                <div className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} *`}{" "}
                    {result.release_date || `${result.first_air_date} *`}{" "}
                    <TbThumbUp className="h-6 mx-2" /> {result.vote_count}
                </div>
            </div>
        </div>
    );
}
export default Thumbnail;