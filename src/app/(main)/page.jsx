import LeftSideBar from "@/components/homepage/LeftSideBar";
import RightSideBar from "@/components/homepage/RightSideBar";

const getAllCategories = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data.news_category;
}

const Home = async () => {

    const categories = await getAllCategories();

    return (
        <section className=' container mx-auto px-5 md:px-8 lg:px-12 py-10 grid grid-cols-4 gap-4'>

            {/* All Categories */}
            <div className="">
              <LeftSideBar categories={categories} activeId = {'05'}/>
            </div>

            {/* Dragon News Home */}
            <div className="col-span-2">
                <h1 className='text-xl font-semibold '>Dragon News Home</h1>

            </div>

            <div >
                <RightSideBar/>
            </div>
        </section>
    );
};

export default Home;