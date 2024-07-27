import Thumbnail from './Thumbnail'

function Results({results})
{
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        3xl:flex flex-wrap justify-center'>
            {
                results.map(result => (
                    <Thumbnail result={result}/>
                ))
            }
        </div>
    );
}
export default Results;