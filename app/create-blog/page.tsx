import React from 'react';

interface Props {
}

const CreateBlog: React.FC<Props> = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <label htmlFor="message" className="block mb-2 text-2xl font-extrabold text-gray-900">Title</label>
            <textarea id="message" rows={3} cols={120} className="block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg outline outline-black-400 w-300 mb-10 focus:outline-none focus:ring focus:ring-orange-300 focus:border focurs:border-orange-300" placeholder="Write your title here..."></textarea>
            <label htmlFor="message" className="block mb-2 text-2xl font-extrabold text-gray-900">Description</label>
            <textarea id="message" rows={15} cols={120} className="block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg outline outline-black-400 w-300 mb-10 focus:outline-none focus:ring focus:ring-orange-300 focus:border focurs:border-orange-300" placeholder="Write your description here..."></textarea>
            <button type='button' className="post_btn">
                POST
            </button>
        </section>
    );
}

export default CreateBlog;
