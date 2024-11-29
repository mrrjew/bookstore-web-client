import { NavSoials,Navigation } from "../types/navigation";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";





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
    href: "/user/wishlist",
    icon: <GrFavorite />,
  },
  {
    name: "Cart",
    href: "/user/cart",
    icon: <FiShoppingCart />,
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