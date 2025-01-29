import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {IGif} from "../types/gif.type"

interface GifContextType {
    gf: GiphyFetch;
    gifs: IGif[];
    setGifs: (gifs: IGif[]) => void;
    filter: "stickers" | "text" | "gifs";
    setFilter: (filter: "stickers" | "text" | "gifs") => void;
    favorites: string[];
    addToFavorites: (id: any) => void;
}

const GifContext = createContext<GifContextType | undefined>(undefined)

const GifProvider = ({ children }: {children : ReactNode}) => {
    const [gifs, setGifs] = useState<IGif[]>([]);
    const [filter, setFilter] = useState<"stickers" | "text" | "gifs">("gifs");
    const [favorites, setFavorites] = useState<string[]>([]);

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)
    useEffect(() => {
        const favorites = localStorage.getItem("favoriteGIFs");
        if (favorites) {
            setFavorites(JSON.parse(favorites));
        } else {
            setFavorites([]);
        }
    }, []);

    const addToFavorites = (id: string | number) => {
        if (typeof id !== "string") return
        console.log(id);
        if (favorites.includes(id)) {
          // If the item is already in favorites, remove it
          const updatedFavorites = favorites.filter((itemId) => itemId !== id);
          localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
          setFavorites(updatedFavorites);
        } else {
          // If the item is not in favorites, add it
          const updatedFavorites = [...favorites];
          updatedFavorites.push(id);
          localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
          setFavorites(updatedFavorites);
        }
    };      
    

    return <GifContext.Provider value={{gf, gifs, addToFavorites, setGifs, filter, setFilter, favorites}}>{children}</GifContext.Provider>
}

export const GifState = () => {
    const context = useContext(GifContext);
    if (!context) {
        throw new Error("GifContext is not available. Ensure GifProvider is wrapping your component tree.");
    }
    return context;
}

export default GifProvider;