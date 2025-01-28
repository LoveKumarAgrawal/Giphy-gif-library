import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, ReactNode, useContext, useState } from "react";
import {IGif} from "../types/gif.type"

interface GifContextType {
    gf: GiphyFetch;
    gifs: IGif[];
    setGifs: (gifs: IGif[]) => void;
    filter: "stickers" | "text" | "gifs";
    setFilter: (filter: "stickers" | "text" | "gifs") => void;
    favorites: IGif[];
}

const GifContext = createContext<GifContextType | undefined>(undefined)

const GifProvider = ({ children }: {children : ReactNode}) => {
    const [gifs, setGifs] = useState<IGif[]>([]);
    const [filter, setFilter] = useState<"stickers" | "text" | "gifs">("gifs");
    const [favorites, setFavorites] = useState<IGif[]>([]);

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)

    return <GifContext.Provider value={{gf, gifs, setGifs, filter, setFilter, favorites}}>{children}</GifContext.Provider>
}

export const GifState = () => {
    const context = useContext(GifContext);
    if (!context) {
        throw new Error("GifContext is not available. Ensure GifProvider is wrapping your component tree.");
    }
    return context;
}

export default GifProvider;