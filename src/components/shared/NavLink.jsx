"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({href, children}) => {
    const pathname= usePathname();
    const active = pathname === href;
    
  //  console.log(pathname, active, href)
 
    return (
  
      <Link href={href}
      className={`text-lg ${active ? 'text-purple-500 border-b-2  border-purple-500' : ""}`}
      >{children}</Link>
    );
};

export default NavLink;