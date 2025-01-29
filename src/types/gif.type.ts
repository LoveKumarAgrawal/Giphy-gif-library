export interface WebpImage {
    webp?: string;
}

export interface FixedWidth {
    fixed_width: WebpImage
}

export interface UserGif {
    display_name: string;
    avatar_url: string;
    description?: string;
    username: string;
}

export interface IGif {
    type: string;
    id: string | number;
    slug: string;
    images?: FixedWidth;
    title?: string;
    user?: UserGif;
    source?: string;
}