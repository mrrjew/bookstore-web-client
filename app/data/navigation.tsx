import { NavSoials,Navigation } from "../types/navigation";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";


let cart_quantity,wishlist_quantity;

if(typeof window !== 'undefined'){
    cart_quantity = JSON.parse(localStorage.getItem('cart') || '[]').length;
    wishlist_quantity = JSON.parse(localStorage.getItem('wishlist') || '[]').length;
    console.log(JSON.parse(localStorage.getItem('cart') || '[]'))
}

export const NAV_SOCIALS:NavSoials[] = [
    {
    name:"Facebook",
    href:"#",
    icon: <FaFacebookF/>
    },
    {
        name:"Instagram",
        href:"#",
        icon: <AiFillInstagram/>
    },
    {
        name:"X",
        href:"#",
        icon: <FaXTwitter />
    },
    {
        name:"LinkedIn",
        href:"#",
        icon: <FaLinkedinIn />
    }
]

export const NAV_ICONS: NavSoials[] = [
  {
    name: "Search",
    href: "#",
    icon: <IoSearch />,
  },
  {
    name: "Wishlist",
    href: "/wishlist",
    icon: <GrFavorite />,
    quantity:wishlist_quantity
},
{
    name: "Cart",
    href: "/cart",
    icon: <FiShoppingCart />,
    quantity:cart_quantity
  },
];

export const NAVIGATION:Navigation[] = [
    {
        name:"Home",
        href:"/"
    },
    {
        name:"Store",
        href:"/store"
    },
    {
        name:"Blog",
        href:"/blog"
    },
    {
        name:"Contact",
        href:"/contact"
    }
]