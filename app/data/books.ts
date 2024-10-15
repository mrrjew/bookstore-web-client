import { Books } from "../types/books";
import sub from "@/app/assets/images/subconscious.jpg"
import fortyeight from "@/app/assets/images/48laws.png"
import fuck from "@/app/assets/images/fuck.jpeg"
import think from "@/app/assets/images/think-grow.jpg"

export const books:Books[] = [
  {
    title:"The Power of the Subconsious Mind",
    author:"Joshua L. Groff",
    image:sub,
    description:"The Power of the Subconsious Mind is a book that explores the subconscious mind",
    price:1000,
    category:"Science",
    countInStock:10,
    rating:4.5,
    numReviews:10,
    isNew:true,
    pages:246,
    language:"English",
  },
  {
    title:"48 Laws of Power",
    author:"Robert Greene",
    image:fortyeight,
    description:"48 laws of power teaches about human nature and how to manipulate it to your needs.",
    price:890,
    category:"Psychology",
    countInStock:13,
    rating:4.5,
    numReviews:10,
    isNew:true,
    pages:246,
    language:"English",
  },
  {
    title:"The Subtle Art of Not Giving a Fuck",
    author:"Mark Manson",
    image:fuck,
    description:"You can't take everything personal in life. This books helps you to master that art",
    price:594,
    category:"Psychology",
    countInStock:13,
    rating:4.5,
    numReviews:10,
    isNew:true,
    pages:246,
    language:"English",
  },

  {
    title:"Think and Grow Rich",
    author:"Napoleon Hill",
    image:think,
    description:"You are already rich. You just need to learn how to make it a reality",
    price:1000,
    category:"Psychology",
    countInStock:13,
    rating:4.5,
    numReviews:10,
    isNew:true,
    pages:246,
    language:"English",
  },
]