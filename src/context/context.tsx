import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, ReactNode, useContext, useState } from "react";

interface GifContextType {
    gf?: GiphyFetch;
    gifs: { id: string; url: string }[];
    setGifs: (gifs: { id: string; url: string }[]) => void;
    filter: string;
    setFilter: (filter: string) => void;
    favorites: { id: string; url: string }[];
}

const GifContext = createContext<GifContextType | undefined>(undefined)

const GifProvider = ({ children }: {children : ReactNode}) => {
    const [gifs, setGifs] = useState<{ id: string; url: string }[]>([]);
    const [filter, setFilter] = useState<string>("gifs");
    const [favorites, setFavorites] = useState<{ id: string; url: string }[]>([]);

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