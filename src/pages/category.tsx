import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IGif } from "../types/gif.type"
import { GifState } from "../context/context"
import Gif from "../components/gif"
import FollowOn from "../components/follow-on"

const Category = () => {

    const [results, setResults] = useState<IGif[]>([])
    const { gf } = GifState()

    const { category } = useParams()

    const fetchResults = async () => {
        if (!category) {
            console.error("Query param is not provided")
            return;
        }
        const { data: gifs } = await gf.gifs(category, category);
        setResults(gifs)
    }
    useEffect(() => {
        fetchResults()
    }, [category])

    return (
        <div className="flex flex-col sm:flex-row gap-5 my-4">
            <div className="w-full sm:w-72">
                {results.length > 0 && <Gif gif={results[0]} hover={false} />}
                <span className="text-gray-400 text-sm pt-2">
                    Don&apos;t tell it to me, GIF it to me!
                </span>
                <FollowOn />

                <div className="divider" />
            </div>
            <div className="">
                <h2 className="text-4xl pb-1 font-extrabold capitalize">{category?.split("-").join(" & ")} GIFs</h2>
                <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
                    @{category}
                </h2>
                {results.length > 0 && (
                    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
                        {results.slice(1).map((gif) => (
                            <Gif gif={gif} key={gif.title} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Category