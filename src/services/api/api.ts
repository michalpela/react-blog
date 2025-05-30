import {AllPostsResponse} from "../../types/post.ts";

const API_URL = "http://127.0.0.1:3000/api/"


export const fetchThreePosts  = async () => {
    const result = await fetch(API_URL+"get-all-posts/3");
    const jsonData :AllPostsResponse = await result.json()
    if (!jsonData) return
    return jsonData
}
