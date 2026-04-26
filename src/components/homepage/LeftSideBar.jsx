import Link from 'next/link';


const LeftSideBar = ({ categories, activeId }) => {

    return (
        <div className='space-y-4'>
            <h1 className='text-xl font-semibold'>All Categories</h1>
            <ul className="flex flex-col gap-2 font-medium text-lg text-gray-500">
                {
                    categories.map(category =>
                        <li key={category.category_id}
                            className={`${activeId == category.category_id && 'bg-purple-500 text-base-100 rounded-md'}`}>

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