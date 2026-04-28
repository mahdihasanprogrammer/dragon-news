"use client"
import NavLink from './NavLink';
import Image from 'next/image';
import user_avatar from '@/assets/user.png'
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';


const Navbar = () => {
  const {data:session} = authClient.useSession()
  console.log(session?.user)

  return (
    <div className='container mx-auto px-5 md:px-8 lg:px-12 py-5 flex justify-center md:justify-between items-center gap-4  flex-wrap'>

      <div></div>

      <ul className='flex justify-center items-center gap-4 text-gray-500 font-medium '>
        <li>
          <NavLink href={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink href={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink href={'/career'}>Career</NavLink>
        </li>
      </ul>

      <div className='flex items-center justify-between gap-4'>
        <p>{session?.user?.name}</p>
        <Image src={ session?.user.image? session?.user.image: user_avatar} width={50} height={50} alt='user logo' className='size-8 rounded-full' />

        <Link href={'/login'}>
          <button className='btn  bg-purple-500 text-base-100   text-base'>Login</button>
        </Link>

      </div>

    </div>
  );
};

export default Navbar;