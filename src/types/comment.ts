export interface Comment {
    _id: string;
    content: string;
    date: string;
    author: {
        _id: string;
        email: string;
    };
}