import { useEffect } from "react";
import { GifState } from "../context/context";

const Home = () => {
    const { gf, gifs, setGifs, filter } = GifState();

    const fetchTrendingGIFs = async () => {
        const { data } = await gf?.trending({
            limit: 20,
            type: filter,
            rating: "g",
        });
        setGifs(data); 
    };

    useEffect(() => {
        fetchTrendingGIFs();
    }, [filter]);
    return <div>
        Home
    </div>
}

export default Home