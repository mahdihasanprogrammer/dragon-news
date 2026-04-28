import Link from 'next/link';


const LeftSideBar = ({ categories, activeId }) => {

    return (
        <div className='space-y-4'>
            <h1 className='text-xl font-semibold'>All Categories</h1>
            <ul className="space-y-2 font-medium text-lg text-gray-500">
                {
                    categories.map(category =>
                        <li key={category.category_id}
                            className={`hover:bg-purple-600 hover:text-base-100 transition-all duration-500 rounded-sm ${activeId == category.category_id && 'bg-purple-600 text-base-100'}`}>

                            <Link className='block mx-auto px-12  py-2 rounded-sm'
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