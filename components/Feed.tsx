'use client'
import { useGetAllBlogsQuery } from '@redux/slices/apiSlice';
import { Loading } from './Loading';
import Link from 'next/link';
interface Props {
}

const Feed: React.FC<Props> = () => {
  const { data : blogs, isLoading, isError, isSuccess } = useGetAllBlogsQuery('/blogs');
  if (isLoading) return <Loading/>
  else if (isError) return <h1>Error Loading Page...</h1>
  else {
    return (
      <section className="flex flex-col items-center">
        { blogs.map((blog : any,index : any) => (
      <div key = {index} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-10">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.blogHeadline}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mb-4">{ blog.blogDescription.length > 300 && blog.blogDescription.substring(0,300).concat(' ...')}
         { blog.blogDescription.length <= 300 && blog.blogDescription}</p>
          <div className="w-30">
          <Link href={`/blogs/${blog.id}`}>
          <button type='button' className="outline_btn">
               SHOW MORE
          </button>
          </Link>
          </div>
        </div>
      </div>
    ))}
      </section>
    );
  }
}

export default Feed;
