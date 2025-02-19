import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GifState } from "../context/context"
import { IGif } from "../types/gif.type"
import FilterGif from "../components/filter-gif"
import Gif from "../components/gif"

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState<IGif[]>([])

    const { gf, filter } = GifState()
    const { query } = useParams()

    const fetchSearchResults = async() => {
        if (!query) {
            console.error("Query parameter is missing.");
            return;
        }
        const { data: gifs } = await gf.search(query, {
            sort: "relevant",
            lang: "en",
            type: filter,
            limit: 20
        })

        setSearchResults(gifs);
    }

    useEffect(() => {
        fetchSearchResults
    }, [filter])


    return (
        <div className="my-4">
            <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>

            <FilterGif alignLeft={true} />
            {searchResults.length > 0 ? (
                <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
                    {searchResults.map((gif) => (
                        <Gif gif={gif} key={gif.title} />
                    ))}
                </div>
            ): (<span>
                {" "}
                No GIFs found for {query}. Try searching for Stickers instead?
            </span>) }
        </div>
    )
}

export default SearchPage