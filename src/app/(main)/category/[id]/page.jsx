import LeftSideBar from "@/components/homepage/LeftSideBar";
import RightSideBar from "@/components/homepage/RightSideBar";
import { getAllCategories, getAllNewsByCategory } from "@/lib/data";




const CategoryDetailsPage = async ({ params }) => {
    const {id} = await params;

    console.log(id)

    const categories = await getAllCategories();
    const newsByCategory = await getAllNewsByCategory(id);

    return (
        <section className=' container mx-auto px-5 md:px-8 lg:px-12 py-10 grid grid-cols-4 gap-4'>

            {/* All Categories */}
            <div className="">
                <LeftSideBar categories={categories} activeId={id} />
            </div>

            {/* Dragon News Home */}
            <div className="col-span-2 space-y-4">
                <h1 className='text-xl font-semibold '>Dragon news by categories</h1>
                <ul className="flex flex-col gap-4">
                    {
                        newsByCategory.map(news =>
                            <li key={news._id}
                                className="bg-gray-300  p-4 rounded-2xl">
                                {news.title}
                            </li>
                        )
                    }
                </ul>

            </div>

            <div >
                <RightSideBar />
            </div>
        </section>
    );
};

export default CategoryDetailsPage;