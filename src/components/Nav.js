import requests from "../utils/requests";

function Nav() {
    return (
        <nav className="relative">
            <div className="flex px-10 whitespace-nowrap space-x-10 sm:space-x-20 text-2xl
            overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title }]) => (
                    <h2 
                        key={key}
                        className="cursor-pointer hover:scale-125 active:text-red-500 last:pr-24"
                    >{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </nav>
    );
}

export default Nav;
