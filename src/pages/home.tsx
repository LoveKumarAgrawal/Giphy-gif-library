import { useEffect } from "react";
import { GifState } from "../context/context";
import Gif from "../components/gif";

const Home = () => {
    const { gf, gifs, setGifs, filter } = GifState();

    const fetchTrendingGIFs = async () => {
        const { data: gifs } = await gf?.trending({
            limit: 20,
            type: filter,
            rating: "g",
        });
        console.log(gifs)
        setGifs(gifs);
    };

    useEffect(() => {
        fetchTrendingGIFs();
    }, [filter]);
    return (
        <div>
            <img src="/banner.gif" alt="earth banner" className="mt-2 rounded w-full" />

            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
                {gifs.map((gif) => {
                    return <Gif gif={gif} key={gif.title} />
                })}
            </div>
        </div>
    )
}

export default Home