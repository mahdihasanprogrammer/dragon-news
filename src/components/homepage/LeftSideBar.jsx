import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {

    return (
        <div className='space-y-4'>
            <h1 className='text-xl font-semibold'>All Categories</h1>
            <ul className="flex flex-col gap-3 font-medium text-lg text-gray-500">
                {
                    categories.map(category =>
                        <li key={category.category_id}
                            className={`${activeId == category.category_id && 'bg-gray-200 text-gray-800'}`}>

                            <Link className='block p-2 rounded-md'
                             href={`/category/${category.category_id}`}>
                                {category.category_name}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;