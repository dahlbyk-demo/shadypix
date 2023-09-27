export type Album = {
    id: number;
    title: string;
    userId: number;
}

export async function getAllAlbums() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!res.ok) {
        throw new Error('Failed to fetch albums!');
    }

    return await res.json() as Album[];
}