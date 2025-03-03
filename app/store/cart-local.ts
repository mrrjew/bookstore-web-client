import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Book = {
    id: string;
    title: string;
    price: number;
    image:string | StaticImport;
    pages:number;
    author:string;
    countInStock:number;
    quantity?: number;
  };
  
  class Cart {
    private cart: Book[];
  
    constructor() {
      this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    }
  
    private saveCart(): void {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  
    public addBook(book: Book): void {
      const existingBook = this.cart.find(item => item.id === book.id);
      if (existingBook) {
        existingBook.quantity! += 1;
      } else {
        book.quantity = 1;
        this.cart.push(book);
      }
      this.saveCart();
    }
  
    public verifyBookInCart(book:string):boolean {
      const existingBook = this.cart.find(item => item.id === book);

      if(!existingBook){
        return false
      }
      return true
    }

    public updateBook(bookId: string, quantity: number): void {
      const book = this.cart.find(item => item.id === bookId);
      if (book) {
        book.quantity = quantity;
        if (book.quantity <= 0) {
          this.removeBook(bookId);
        } else {
          this.saveCart();
        }
      }
    }
  
    public increaseQuantity(bookId: string): void {
      const book = this.cart.find(item => item.id === bookId);
      if (book) {
        book.quantity! += 1;
        this.saveCart();
      }
    }
  
    public decreaseQuantity(bookId: string): void {
      const book = this.cart.find(item => item.id === bookId);
      if (book?.quantity !== undefined) {
        book.quantity! -= 1;
        if (book.quantity <= 0) {
          this.removeBook(bookId);
        } else {
          this.saveCart();
        }
      }
    }
  
    public removeBook(bookId: string): void {
      this.cart = this.cart.filter(item => item.id !== bookId);
      this.saveCart();
    }
  
    public clearCart(): void {
      this.cart = [];
      this.saveCart();
    }
  
    public getCart(): Book[] {
      return this.cart;
    }
  }
  
  const myCart = new Cart();


  export {myCart}