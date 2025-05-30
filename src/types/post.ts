import { Comment } from './comment.ts'

export interface SinglePost {
    _id: string;
    title: string;
    content: string;
    keyWords: string[];
    date: string;
    comments: Comment[];
}
export interface PostSummary {
    _id: string;
    title: string;
    content: string;
    keyWords: string[];
    date: string;
}

export interface AllPostsResponse {
    postsCount: number;
    data: PostSummary[];
}