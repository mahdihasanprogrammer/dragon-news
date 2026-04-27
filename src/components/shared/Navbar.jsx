
import NavLink from './NavLink';
import Image from 'next/image';
import user_avatar from '@/assets/user.png'
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='container mx-auto px-5 md:px-8 lg:px-12 py-5 flex justify-center md:justify-between items-center gap-4  flex-wrap'>

      <div></div>

      <ul className='flex justify-between items-center gap-4 text-gray-500 font-medium'>
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
        <Image src={user_avatar} alt='user logo' className='size-8' />

        <Link href={'/login'}>
          <button className='btn btn-sm md:btn-md bg-purple-500 text-base-100 box-content  w-20 text-base'>Login</button>
        </Link>

      </div>

    </div>
  );
};

export default Navbar;