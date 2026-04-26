
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaYoutube } from 'react-icons/fa';

const RightSideBar = () => {
    
    return (
        <div className='space-y-6'>
            {/* login */}
            <div className='space-y-4'>
                <h1 className='text-xl font-semibold'>Login with</h1>
                <div className='space-y-3'>
                    <button className='btn w-full text-blue-500'><FaGoogle /> Login with Google</button>
                    <button className='btn w-full'> <FaGithub />
                        Login with GitHub</button>
                </div>
            </div>

            {/* find */}
            <div className='space-y-4'>
                <h1 className='text-xl font-semibold'>Find Us On</h1>

                <div className='flex flex-col  border border-gray-200'>

                    <button className=' bg-zinc-50 py-4 border border-gray-300 flex items pl-4 gap-2 '>
                       <FaFacebook className='bg-gray-200 p-2 size-5 text-blue-600 rounded-full box-content'/> Facebook
                        </button>

                    <button className=' bg-zinc-50 py-4 border border-gray-300 flex items pl-4 gap-2 '>
                      <FaTwitter className='bg-gray-200 p-2 size-5 text-blue-400 rounded-full box-content'/> Twitter
                        </button>

                    <button className=' bg-zinc-50 py-4 border border-gray-300 flex items pl-4 gap-2 '>
                      <FaYoutube className='bg-gray-200 p-2 size-5 text-red-600 rounded-full box-content'/>  Youtube
                        </button>

                </div>
            </div>
        </div>
    );
};

export default RightSideBar;