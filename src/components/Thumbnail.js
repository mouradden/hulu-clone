import Image from 'next/image'

function Thumbnail({result})
{
    const Base_Url = "https://image.tmdb.org/t/p/original";
    return (
        <div>
            <h1>{result.title}</h1>
            <Image 
                src={`${Base_Url}${result.backdrop_path}`}
                width={300}
                height={300}
            />
        </div>
    );
}
export default Thumbnail;