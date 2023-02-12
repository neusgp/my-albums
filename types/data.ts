import { Album } from "./albums";

export type Data = {
    props: {
        albums: Album[];
    };
} | undefined