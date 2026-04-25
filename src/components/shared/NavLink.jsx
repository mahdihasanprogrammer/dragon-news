"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({href, children}) => {
    const pathName= usePathname();
    const isActive = pathName == href;
    console.log(isActive)
 
    return (
      <li className={`${isActive ? 'text-pink-500' : 'text-gray-500'}`}>
        <Link href={href}>{children}</Link>
      </li>
    );
};

export default NavLink;