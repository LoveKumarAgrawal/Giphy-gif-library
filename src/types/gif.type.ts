export interface WebpImage {
    webp?: string;
}

export interface FixedWidth {
    fixed_width: WebpImage
}

export interface UserGif {
    display_name: string;
    avatar_url: string;
}

export interface IGif {
    type: string;
    slug: string;
    images?: FixedWidth;
    title?: string;
    user?: UserGif;
}