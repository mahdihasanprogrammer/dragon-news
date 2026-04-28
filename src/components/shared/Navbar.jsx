"use client"
import NavLink from './NavLink';
import Image from 'next/image';
import user_avatar from '@/assets/user.png'
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';




const Navbar = () => {

  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;
  const router = useRouter();



  const handleLogOut =async ()=>{
    await authClient.signOut({
      fetchOptions:{
        onSuccess: ()=>{
          router.push('/login')
        }
      }
    })
  }




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

      {isPending ? <span className="loading loading-spinner text-primary"></span>
      : user ? 
        <div className='flex items-center justify-between gap-4'>
          <p>{user?.name}</p>
          <Image src={user ? user.image : user_avatar} width={40} height={40} alt='user logo' className=' rounded-full' />


          
            <button onClick={handleLogOut}
             className='btn  bg-purple-600 text-base-100'>Logout</button>
         
        </div> :


        <Link href={'/login'}>
          <button className='btn  bg-purple-600 text-base-100'>Login</button>
        </Link>
      }

    </div>
  );
};

export default Navbar;