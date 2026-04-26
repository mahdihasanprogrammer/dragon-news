import Image from 'next/image';
import Link from 'next/link';

import { FaRegBookmark, FaRegEye, FaStar } from 'react-icons/fa';
import { MdOutlineShare } from 'react-icons/md';

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-sm">

            <div className="card-body">

                <div className='flex justify-between items-center gap-4 text-xs flex-wrap bg-base-300 p-3'>

                    <div className='flex justify-between items-center gap-4 '>
                        <Image src={news.author?.img}
                            alt={news.title}
                            width={40}
                            height={10}
                            className='rounded-full' />

                        <div>
                            <h2 className='text-base font-semibold'>{news.author?.name}</h2>
                            <p>{news.author?.published_date}</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <FaRegBookmark className='text-lg' />
                        <MdOutlineShare className='text-lg' />
                    </div>
                </div>

                <h2 className="card-title">{news.title}</h2>
                <figure>
                    <Image
                        src={news.image_url} alt={news.title} width={500} height={500} className='w-full' />
                </figure>
                <div className='border-b border-gray-300'>
                    <p className='line-clamp-3'>{news.details}</p>
                    <Link href={`/news/${news._id}`}>
                        <button className='text-orange-400 text-base 
                        font-semibold my-2 cursor-pointer' >See details</button></Link>

                </div>

                <div className='flex justify-between items-center gap-2 font-medium text-gray-600'>
                    <div className='flex justify-between items-center gap-2 text-base'>
                        <FaStar className='text-xl text-orange-400' />
                        <p>{news.rating?.number}</p>
                    </div>
                    <div className='flex justify-between items-center gap-2 text-base'>
                        <FaRegEye className='text-lg ' />
                        <p>{news.total_view}</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default NewsCard;