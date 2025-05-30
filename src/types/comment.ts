export interface Comment {
    _id: string;
    author: {
        _id: string;
        email: string;
    };
    content: string;
    date: string;
}