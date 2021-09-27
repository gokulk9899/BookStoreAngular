export interface IBook{
    bookId: number,
    bookTitle: string,
    authorName: string,
    category: string,
    details: string,
    price: number,
    rating?: number,
    image?: string,
    uploadTime: any
}