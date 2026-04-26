import LeftSideBar from "@/components/homepage/LeftSideBar";
import NewsCard from "@/components/homepage/NewsCard";
import RightSideBar from "@/components/homepage/RightSideBar";
import { getAllCategories, getAllNewsByCategory } from "@/lib/data";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const news = await getAllCategories(id);

    return {
        title: news.title,
        description: news.details
    }

}


const CategoryDetailsPage = async ({ params }) => {
    const { id } = await params;

    console.log(id)

    const categories = await getAllCategories();
    const newsByCategory = await getAllNewsByCategory(id);

    return (
        <section className=' container mx-auto px-5 md:px-8 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>

            {/* All Categories */}
            <div className="">
                <LeftSideBar categories={categories} activeId={id} />
            </div>

            {/* Dragon News Home */}
            <div className="md:col-span-2 space-y-4">
                <h1 className='text-xl font-semibold '>Dragon news by categories</h1>

                {newsByCategory.length === 0 ?
                    <div className="flex justify-center items-center h-[50vh] bg-gray-200 rounded-2xl">
                        <h1 className="text-3xl font-semibold text-purple-500">No news found</h1>
                    </div>

                    : <div className="flex flex-col gap-4">
                        {
                            newsByCategory.map(news =>
                                <NewsCard key={news._id} news={news}></NewsCard>
                            )
                        }
                    </div>}

            </div>

            <div>
                <RightSideBar />
            </div>
        </section>
    );
};

export default CategoryDetailsPage;