import { client } from "./client";


export const getDevelopment = async () => {
    const data = await client.get({endpoint:"developments"});
    return {data};
}

export const getBlog = async () => {
    const data = await client.get({endpoint:"blog"});
    return {data};
}