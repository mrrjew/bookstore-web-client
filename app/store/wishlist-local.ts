import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Book = {
    id: string;
    title: string;
    price: number;
    image: string | StaticImport;
    pages: number;
    author: string;
    countInStock: number;
    quantity?: number;
};

class Wishlist {
    private Wishlist: Book[];

    constructor() {
        this.Wishlist = typeof window !== 'undefined'
            ? JSON.parse(localStorage.getItem('Wishlist') || '[]')
            : [];
    }

    private saveWishlist(): void {
        if (typeof window !== 'undefined') {
            localStorage.setItem('Wishlist', JSON.stringify(this.Wishlist));
        }
    }

    public addBook(book: Book): void {
        const existingBook = this.Wishlist.find(item => item.id === book.id);
        if (existingBook) {
            existingBook.quantity! += 1;
        } else {
            book.quantity = 1;
            this.Wishlist.push(book);
        }
        this.saveWishlist();
    }

    public verifyBookInWishlist(bookId: string): boolean {
        return this.Wishlist.some(item => item.id === bookId);
    }

    public removeBook(bookId: string): void {
        this.Wishlist = this.Wishlist.filter(item => item.id !== bookId);
        this.saveWishlist();
    }

    public clearWishlist(): void {
        this.Wishlist = [];
        this.saveWishlist();
    }

    public getWishlist(): Book[] {
        return this.Wishlist;
    }
}

const myWishlist = new Wishlist();

export { myWishlist };
