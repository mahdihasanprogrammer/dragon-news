import LeftSideBar from "@/components/homepage/LeftSideBar";
import NewsCard from "@/components/homepage/NewsCard";
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
                <div className="flex flex-col gap-4">
                    {
                        newsByCategory.map(news =>
                            <NewsCard key={news._id} news={news}></NewsCard>
                        )
                    }
                </div>

            </div>

            <div >
                <RightSideBar />
            </div>
        </section>
    );
};

export default CategoryDetailsPage;