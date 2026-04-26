
import NavLink from './NavLink';
import Image from 'next/image';
import user_avatar from '@/assets/user.png'


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

      <div className='flex items-center justify-between gap-2'>
        <Image src={user_avatar} alt='user logo' className='size-8 md:size-10' />
        <button className='btn btn-neutral btn-sm md:btn-md w-20 md:w-24'>login</button>
      </div>

    </div>
  );
};

export default Navbar;