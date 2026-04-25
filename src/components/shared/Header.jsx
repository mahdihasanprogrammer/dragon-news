import Image from 'next/image';
import logo from '@/assets/logo.png'
import { format} from "date-fns";

const Header = () => {
    return (
        <div className='text-center space-y-2 py-8'>
            <Image className=' mx-auto'
                src={logo}
                width={300}
                height={300}
                alt='logo' />
                
            <p className='text-lg text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-gray-500'><span className='text-zinc-800'>
                {format(new Date, "EEEE")}</span> {format (new Date, "MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;