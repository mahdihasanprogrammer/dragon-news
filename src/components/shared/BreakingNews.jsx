import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='container mx-auto px-5 md:px-8 lg:px-12 py-6'>
            <div className='px-2 py-4 bg-gray-100 flex items-center justify-between gap-2'>
                <button className='btn bg-red-500 text-base-100'>Latest</button>
                <Marquee pauseOnHover={true}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium cupiditate voluptatibus aperiam minima libero recusandae rem possimus, magnam debitis iste officiis! Placeat dolor, ea et quae voluptatum, in, nemo incidunt quidem nesciunt consectetur voluptas temporibus deserunt blanditiis! Veritatis ratione ab dolorum mollitia beatae eveniet eum delectus vero doloremque labore, fugiat vitae dicta laudantium quaerat consequatur, libero natus blanditiis quam consectetur quibusdam. Similique perferendis omnis, reiciendis facere blanditiis tempore amet corrupti recusandae expedita harum esse voluptatibus, sed magnam. Iste ullam saepe deserunt quibusdam sunt porro non excepturi necessitatibus. Distinctio praesentium sunt non maxime ut nisi molestiae numquam tempora, quos fugiat?
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;